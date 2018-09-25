/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../src/module';
import * as import2 from '@angular/common';
import * as import3 from '../../src/zone.helper';
import * as import4 from '../../src/dom.helper';
import * as import5 from '../../src/linkedin.service';
import * as import6 from '../../src/window.helper';
import * as import7 from '@angular/platform-browser';
class LinkedInSdkModuleInjector extends import0.ɵNgModuleInjector<import1.LinkedInSdkModule> {
  _CommonModule_0:import2.CommonModule;
  _LinkedInSdkModule_1:import1.LinkedInSdkModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  __window_3:any;
  __ZoneHelper_4:import3.ZoneHelper;
  __DomHelper_5:import4.DomHelper;
  __LinkedInService_6:import5.LinkedInService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  get _window_3():any {
    if ((this.__window_3 == null)) { (this.__window_3 = import6.getWindow()); }
    return this.__window_3;
  }
  get _ZoneHelper_4():import3.ZoneHelper {
    if ((this.__ZoneHelper_4 == null)) { (this.__ZoneHelper_4 = new import3.ZoneHelper(this.parent.get(import0.NgZone))); }
    return this.__ZoneHelper_4;
  }
  get _DomHelper_5():import4.DomHelper {
    if ((this.__DomHelper_5 == null)) { (this.__DomHelper_5 = new import4.DomHelper(this._ZoneHelper_4,this.parent.get(import7.DOCUMENT),this._window_3)); }
    return this.__DomHelper_5;
  }
  get _LinkedInService_6():import5.LinkedInService {
    if ((this.__LinkedInService_6 == null)) { (this.__LinkedInService_6 = new import5.LinkedInService(this._DomHelper_5,this._window_3,this.parent.get('apiKey'),this.parent.get('authorize',(null as any)),this.parent.get('isServer',(null as any)))); }
    return this.__LinkedInService_6;
  }
  createInternal():import1.LinkedInSdkModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._LinkedInSdkModule_1 = new import1.LinkedInSdkModule();
    return this._LinkedInSdkModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.LinkedInSdkModule)) { return this._LinkedInSdkModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    if ((token === 'window')) { return this._window_3; }
    if ((token === import3.ZoneHelper)) { return this._ZoneHelper_4; }
    if ((token === import4.DomHelper)) { return this._DomHelper_5; }
    if ((token === import5.LinkedInService)) { return this._LinkedInService_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const LinkedInSdkModuleNgFactory:import0.NgModuleFactory<import1.LinkedInSdkModule> = new import0.NgModuleFactory<any>(LinkedInSdkModuleInjector,import1.LinkedInSdkModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovQ2xpZW50cy9LYXBpbC9hbmd1bGFyLWxpbmtlZGluLXNkay1tYXN0ZXIvc3JjL21vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi9DbGllbnRzL0thcGlsL2FuZ3VsYXItbGlua2VkaW4tc2RrLW1hc3Rlci9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==