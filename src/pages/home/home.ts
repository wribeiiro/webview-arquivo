import { Component } from '@angular/core';
	import { NavController } from 'ionic-angular';
	//import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
	import { DomSanitizer } from '@angular/platform-browser';


	@Component({
		selector: 'page-home',
		templateUrl: 'home.html'
	})
	export class HomePage {
		url: any;

		constructor(public navCtrl: NavController, private sanitize: DomSanitizer) {
			const url = 'http://www.brasilnota.com.br/arquivo/';
			this.url  = this.sanitize.bypassSecurityTrustResourceUrl(url);
		}
	}