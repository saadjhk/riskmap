import { bindable, customElement, inject } from 'aurelia-framework';
import $ from 'jquery';
import { Config } from 'resources/config';
import { Locales } from 'resources/locales/locales';

//start-aurelia-decorators
@customElement('side-pane')
@inject(Locales, Config)
//end-aurelia-decorators
export class SidePane {
  //@bindable attributes do not work with camelCase...
  //start-aurelia-decorators
  @bindable cities;
  @bindable selcity;
  @bindable changeCity;
  @bindable closePane;
  @bindable reportId;
  @bindable querylanguage;
  //end-aurelia-decorators

  constructor(Locales, Config) {
    this.config = Config;
    this.languages = this.config.supported_languages;

    this.lang_obj = {};
    for (let lang of this.languages) {
      if (Locales.languages.hasOwnProperty(lang.key)) {
        this.lang_obj[lang.key] = Locales.languages[lang.key];
      }
    }
    this.locale = {};
    this.currentLanguage = '';

    this.menuList = ['report', 'legend', 'about'];
    // this.seltab = 'about'; //default tab to open
    this.switchTab(this.seltab);

    this.selLegend = 'floods';
    // this.switchLegend('floods_legend');

    this.vidWrapperOpened = true;
    this.videos = [
      {
        platform: 'twitter', //Match string to locale/*/translation.json > report_content.*
        source: {
          id:
            'https://www.youtube.com/embed/rlPNGkhgVoQ',
          en:
            'https://www.youtube.com/embed/EfJRa9sF89Y?autoplay=0&origin=https://petabencana.id&rel=0'
        }
      },
      {
        platform: 'telegram',
        source: {
          id:
            'https://www.youtube.com/embed/Gb_BAAiRw2U?autoplay=0&origin=https://petabencana.id&rel=0',
          en:
            'https://www.youtube.com/embed/EfJRa9sF89Y?autoplay=0&origin=https://petabencana.id&rel=0'
        }
      },
      {
        platform: 'otherapps',
        source: {
          id:
            'https://www.youtube.com/embed/Gb_BAAiRw2U?autoplay=0&origin=https://petabencana.id&rel=0',
          en:
            'https://www.youtube.com/embed/EfJRa9sF89Y?autoplay=0&origin=https://petabencana.id&rel=0'
        }
      }
    ];




    //legends data
    this.all_legends_data = [
      //floods
      {
        legend_name: 'floods',
        legend_title: { en: 'floods', id: 'floods' },
        col_1_title: { en: 'Flood Gauges', id: 'Tinggi Muka Air' },
        col_2_title: { en: 'Flood Depth (cm)', id: 'Tinggi Banjir (cm)' },
        legend_data: [
          {
            col_1: {
              text: { en: 'Alert Level 1', id: 'Siaga 1' },
              icon: 'assets/icons/floodgauge_1.svg'
            },
            col_2: {
                text: { en: '> 150', id: '> 150' },
                color: '#CC2A41'
            }
          },
          {
            col_1: {
              text: { en: 'Alert Level 2', id: 'Siaga 2' },
              icon: 'assets/icons/floodgauge_2.svg'
            },
            col_2: {
              text: { en: '71 - 150', id: '71 - 150' },
              color: '#FF8300'
            }
          },
          {
            col_1: {
              text: { en: 'Alert Level 3', id: 'Siaga 3' },
              icon: 'assets/icons/floodgauge_3.svg'
            },
            col_2: {
              text: { en: '10 - 70', id: '10 - 70' },
              color: '#FFFF00'
            }
          },
          {
            col_1: {
              text: { en: 'Alert Level 4', id: 'Siaga 4' },
              icon: 'assets/icons/floodgauge_4.svg'
            },
            col_2: {
              text: { en: 'Use Caution', id: 'Hati-hati' },
              color: '#A0A9F7'
            }
          }]
        },
      //earthquake_road
      {
        legend_name: 'eq_road_access',
        legend_title: { en: 'Earthquake Road Accessibility', id: 'Earthquake Road Accessibility' },
        legend_data: [
          {
            col_1: {
              text: { en: 'Large Vehicle (Truck)', id: 'Truk' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_1.svg'
            }
          },
          {
            col_1: {
              text: { en: '4 wheel vehicle', id: '4 roda' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_2.svg'
            }
          },
          {
            col_1: {
              text: { en: '2 wheel vehicle', id: '2 roda' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_3.svg'
            }
          },
          {
            col_1: {
              text: { en: 'No Vehicle', id: 'Tidak bisa dilewati kendaraan' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_4.svg'
            }
          }]
        },
      //earthquake_structural
      {
        legend_name: 'eq_structure_fail',
        legend_title: { en: 'Earthquake Structural Failure', id: 'Earthquake Structural Failure' },
        legend_data: [
          {
            col_1: {
              text: { en: 'Cracking', id: 'Retak' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_structure_1.svg'
            }
          },
          {
            col_1: {
              text: { en: 'Partial Collapse', id: 'Roboh Sebagian' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_structure_2.svg'
            }
          },
          {
            col_1: {
              text: { en: 'Fully Collapsed', id: 'Roboh total' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_structure_3.svg'
            }
          }]
        },
      //wind
      {
        legend_name: 'wind',
        legend_title: { en: 'Wind', id: 'Wind' },
        legend_data: [
          {
            col_1: {
              text: { en: 'Low Disruption', id: 'Low Disruption' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/w_1.svg'
            }
          },
          {
            col_1: {
              text: { en: 'Medium Disruption', id: 'Medium Disruption' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/w_2.svg'
            }
          },
          {
            col_1: {
              text: { en: 'High Disruption', id: 'High Disruption' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/w_3.svg'
            }
          }]
        },
      //fire
      {
        legend_name: 'fire',
        legend_title: { en: 'Fire', id: 'Fire' },
        legend_data: [
          {
            col_1: {
              text: { en: 'Fire', id: 'Fire' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/fire_1.svg'
            }
          }]
      },
      //haze
      {
        legend_name: 'haze',
        legend_title: { en: 'Haze', id: 'Haze' },
        legend_data: [
          {
            col_1: {
              text: { en: 'None, Smell Smoke', id: 'None, Smell Smoke' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/haze_1.svg'
            }
          },
          {
            col_1: {
              text: { en: 'Watery Eyes', id: 'Watery Eyes' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/haze_2.svg'
            }
          },
          {
            col_1: {
              text: { en: 'Headache, shortness of breath', id: 'Headache, shortness of breath' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/haze_3.svg'
            }
          }]
        },
      //fire
      {
          legend_name: 'volcano',
          legend_title: { en: 'Volcano', id: 'Volcano' },
          legend_data: [
            {
              col_1: {
                text: { en: 'Volcano', id: 'Volcano' },
                icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/vol_1.png'
              }
            }]
        }
      ];
      //end legends data array
  }

  //on the fly language change
  changeLanguage(language) {

    this.locale = this.lang_obj[language];
    this.currentLanguage = language;

    $('li p').click(function () {
      // reset all
      $('ul.tabs p').removeClass('activelanguage');
      $(this).addClass('activelanguage');
      $(this).parents('li').find('p').filter(function () {
        return !$(this).closest('p').hasClass('tabs-nav');
      }).addClass('activelanguage');
    });

  }

  //get language object from key
  getLangObj(key) {
    let selLang;
    for (let lang of this.languages) {
      if (key === lang.key) {
        selLang = lang;
      } else {
        selLang = this.config.default_language;
      }
    }
    return selLang;
  }

  attached() {
    this.selLanguage = this.querylanguage
      ? this.getLangObj(this.querylanguage)
      : this.config.default_language;
    this.changeLanguage(this.selLanguage.key);
  }

  switchTab(tab) {
    console.log(tab)
    this.seltab = tab;
    $('.panel:not(#vid_' + tab + ')').slideUp('fast');
    $('#vid_' + tab).slideToggle('fast');
    $('.accordion:not(#label_' + tab + ')').parent().removeClass('active');
    $('#label_' + tab).parent().toggleClass('active');
    $('#down_' + tab + ', #up_' + tab).toggle();
    $('.up:not(#up_' + tab + ')').hide();
    $('.down:not(#down_' + tab + ')').show();
  }

  switchLegend(legendId) {
    console.log("legendid", '#'+legendId);
    console.log($('#'+legendId).attr('class'));
    if(this.selLegend !== legendId){
      this.selLegend = legendId
    }else{
      this.selLegend = null;
    }
  }

  switchCity(city) {
    this.changeCity(city, true);
    this.reportId = null;
    this.closePane();
  }

  showVideo(video) {
    $('.videoWrapper:not(#vid_' + video + ')').slideUp('fast');
    $('#vid_' + video).slideToggle('fast');
    $('.labelRow:not(#label_' + video + ')').removeClass('active');
    $('#label_' + video).toggleClass('active');
    $('#down_' + video + ', #up_' + video).toggle();
    $('.up:not(#up_' + video + ')').hide();
    $('.down:not(#down_' + video + ')').show();
  }

  // When the user clicks on div, open the popup
  openTermsPopup() {
    this.closePane();
    $('#screen').show();
    $('#termsPopup').show();
  }
}
