import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  public currentLange = signal<string>('');


  private cookie = inject(SsrCookieService);
  private translate = inject(TranslateService);


  changeLanguage(lang: string) {
    console.log({ lang });
    this.cookie.set('lang', lang);

    // TODO: cambio de idioma
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.currentLange.set(lang);
  }

}
