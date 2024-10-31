import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {

  private languageSrv = inject(LanguageService);
  public languages = computed(() => this.languageSrv.languages());
  public currentLang = computed(() => this.languageSrv.currentLange());

  onChangeLanguage(e: Event){
    const target = e.target as HTMLSelectElement;
    const lang = target.value;
    this.languageSrv.changeLanguage(lang);
  }

}
