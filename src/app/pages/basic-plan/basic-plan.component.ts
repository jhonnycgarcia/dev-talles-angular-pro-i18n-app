import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LanguageSelectorComponent,
    TranslateModule,
],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent { }
