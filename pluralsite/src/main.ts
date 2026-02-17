import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// philippine peso
import localePh from '@angular/common/locales/en-PH';
import { registerLocaleData } from '@angular/common';

// ✅ register locale BEFORE bootstrapping
registerLocaleData(localePh);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// PHILIPPINE LOCAL CURRENCY HOW TO:
//  https://chatgpt.com/share/69949d32-5678-8000-9066-672e78afbf1a
