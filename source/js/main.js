import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initHeader} from './modules/init-header';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
initHeader();
initModals();
