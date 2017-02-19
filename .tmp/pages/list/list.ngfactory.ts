/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './list';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import22 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/components/menu/menu-controller';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from '@angular/core/src/linker/template_ref';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from 'ionic-angular/components/icon/icon';
import * as import37 from 'ionic-angular/components/button/button';
import * as import38 from 'ionic-angular/components/menu/menu-toggle';
import * as import39 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import40 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import41 from 'ionic-angular/components/navbar/navbar';
import * as import42 from '@angular/common/src/directives/ng_for';
import * as import43 from 'ionic-angular/components/list/list';
import * as import44 from '@angular/common/src/directives/ng_if';
import * as import45 from 'ionic-angular/components/content/content';
import * as import46 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import47 from 'ionic-angular/util/form';
import * as import48 from 'ionic-angular/components/item/item-reorder';
import * as import49 from 'ionic-angular/components/item/item';
export class Wrapper_ListPage {
  context:import0.ListPage;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.ListPage(p0,p1);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_ListPage_Host:import2.RenderComponentType = (null as any);
class _View_ListPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ListPage_0_4:Wrapper_ListPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ListPage_Host0,renderType_ListPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('list-page',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ListPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ListPage_0_4 = new Wrapper_ListPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams));
    this._appEl_0.initComponent(this._ListPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ListPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ListPage) && (0 === requestNodeIndex))) { return this._ListPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ListPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ListPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ListPage_Host === (null as any))) { (renderType_ListPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ListPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ListPageNgFactory:import11.ComponentFactory<import0.ListPage> = new import11.ComponentFactory<import0.ListPage>('list-page',viewFactory_ListPage_Host0,import0.ListPage);
const styles_ListPage:any[] = ([] as any[]);
var renderType_ListPage:import2.RenderComponentType = (null as any);
class _View_ListPage0 extends import1.AppView<import0.ListPage> {
  _el_0:any;
  _Header_0_3:import12.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import13.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Button_4_4:import14.Wrapper_Button;
  _MenuToggle_4_5:import15.Wrapper_MenuToggle;
  _ToolbarItem_4_6:import16.Wrapper_ToolbarItem;
  _query_Button_4_0:import17.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import18.Wrapper_Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _ToolbarTitle_9_4:import19.Wrapper_ToolbarTitle;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _Content_14_4:import20.Wrapper_Content;
  _text_15:any;
  _el_16:any;
  _List_16_3:import21.Wrapper_List;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _appEl_18:import3.AppElement;
  _TemplateRef_18_5:any;
  _NgFor_18_6:import22.Wrapper_NgFor;
  _text_19:any;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import3.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import23.Wrapper_NgIf;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ListPage0,renderType_ListPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import26.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import13.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import27.App),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_4,'ion-button','');
    this.renderer.setElementAttribute(this._el_4,'menuToggle','');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import14.viewFactory_Button0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Button_4_4 = new import14.Wrapper_Button('','',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_5 = new import15.Wrapper_MenuToggle(this.parentInjector.get(import28.MenuController),new import25.ElementRef(this._el_4),this.parentInjector.get(import26.ViewController,(null as any)),this._Navbar_2_4.context);
    this._ToolbarItem_4_6 = new import16.Wrapper_ToolbarItem(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import29.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._query_Button_4_0 = new import17.QueryList<any>();
    this._appEl_4.initComponent(this._Button_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_6,'name','menu');
    this.renderer.setElementAttribute(this._el_6,'role','img');
    this._Icon_6_3 = new import18.Wrapper_Icon(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_4.create(this._Button_4_4.context,[([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_9 = new import3.AppElement(9,2,this,this._el_9);
    var compView_9:any = import19.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ToolbarTitle_9_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import29.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_9.initComponent(this._ToolbarTitle_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'My First List',(null as any));
    compView_9.create(this._ToolbarTitle_9_4.context,[([] as any[]).concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]).concat([this._el_4]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._text_8,
        this._el_9,
        this._text_11
      ]
      )
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_14 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_14 = new import3.AppElement(14,(null as any),this,this._el_14);
    var compView_14:any = import20.viewFactory_Content0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Content_14_4 = new import20.Wrapper_Content(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_14),this.renderer,this.parentInjector.get(import27.App),this.parentInjector.get(import30.Keyboard),this.parentInjector.get(import31.NgZone),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import32.Tabs,(null as any)));
    this._appEl_14.initComponent(this._Content_14_4.context,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_16_3 = new import21.Wrapper_List(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_16),this.renderer,this.parentInjector.get(import33.GestureController));
    this._text_17 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._appEl_18 = new import3.AppElement(18,16,this,this._anchor_18);
    this._TemplateRef_18_5 = new import34.TemplateRef_(this._appEl_18,viewFactory_ListPage1);
    this._NgFor_18_6 = new import22.Wrapper_NgFor(this._appEl_18.vcRef,this._TemplateRef_18_5,this.parentInjector.get(import35.IterableDiffers),this.ref);
    this._text_19 = this.renderer.createText(this._el_16,'\n  ',(null as any));
    this._text_20 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_21 = new import3.AppElement(21,14,this,this._anchor_21);
    this._TemplateRef_21_5 = new import34.TemplateRef_(this._appEl_21,viewFactory_ListPage2);
    this._NgIf_21_6 = new import23.Wrapper_NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText((null as any),'\n',(null as any));
    compView_14.create(this._Content_14_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_15,
        this._el_16,
        this._text_20,
        this._appEl_21,
        this._text_22
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_23 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import36.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3.context; }
    if (((token === import37.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_4.context; }
    if (((token === import38.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_5.context; }
    if (((token === import39.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_6.context; }
    if (((token === import40.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarTitle_9_4.context; }
    if (((token === import41.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Navbar_2_4.context; }
    if (((token === import29.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Header_0_3.context; }
    if (((token === import34.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import42.NgFor) && (18 === requestNodeIndex))) { return this._NgFor_18_6.context; }
    if (((token === import43.List) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._List_16_3.context; }
    if (((token === import34.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import44.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6.context; }
    if (((token === import45.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Content_14_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._Button_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    const currVal_3:any = '';
    this._MenuToggle_4_5.check_menuToggle(currVal_3,throwOnChange,false);
    this._MenuToggle_4_5.detectChangesInternal(this,this._el_4,throwOnChange);
    this._ToolbarItem_4_6.detectChangesInternal(this,this._el_4,throwOnChange);
    const currVal_5:any = 'menu';
    this._Icon_6_3.check_name(currVal_5,throwOnChange,false);
    this._Icon_6_3.detectChangesInternal(this,this._el_6,throwOnChange);
    if (this._ToolbarTitle_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    if (this._Content_14_4.detectChangesInternal(this,this._el_14,throwOnChange)) { this._appEl_14.componentView.markAsCheckOnce(); }
    this._List_16_3.detectChangesInternal(this,this._el_16,throwOnChange);
    const currVal_8:any = this.context.items;
    this._NgFor_18_6.check_ngForOf(currVal_8,throwOnChange,false);
    this._NgFor_18_6.detectChangesInternal(this,this._anchor_18,throwOnChange);
    const currVal_9:any = this.context.selectedItem;
    this._NgIf_21_6.check_ngIf(currVal_9,throwOnChange,false);
    this._NgIf_21_6.detectChangesInternal(this,this._anchor_21,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_4.context]);
        this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_4_5.context.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_4,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_6_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_6,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_14_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_14,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_6_3.context.ngOnDestroy();
    this._Content_14_4.context.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_4_5.context.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ListPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ListPage> {
  if ((renderType_ListPage === (null as any))) { (renderType_ListPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ListPage,{})); }
  return new _View_ListPage0(viewUtils,parentInjector,declarationEl);
}
class _View_ListPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Item_0_4:import46.Wrapper_Item;
  _ItemContent_0_5:import46.Wrapper_ItemContent;
  _query_Label_0_0:import17.QueryList<any>;
  _query_Button_0_1:import17.QueryList<any>;
  _query_Icon_0_2:import17.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Icon_2_3:import18.Wrapper_Icon;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ListPage1,renderType_ListPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this.renderer.setElementAttribute(this._el_0,'ion-item','');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import46.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import46.Wrapper_Item(this.parent.parentInjector.get(import47.Form),this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import48.ItemReorder,(null as any)));
    this._ItemContent_0_5 = new import46.Wrapper_ItemContent();
    this._query_Label_0_0 = new import17.QueryList<any>();
    this._query_Button_0_1 = new import17.QueryList<any>();
    this._query_Icon_0_2 = new import17.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_2,'item-left','');
    this.renderer.setElementAttribute(this._el_2,'role','img');
    this._Icon_2_3 = new import18.Wrapper_Icon(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText((null as any),'',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','item-note');
    this.renderer.setElementAttribute(this._el_4,'item-right','');
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_0_0.reset(([] as any[]));
    this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4.context,[
      ([] as any[]).concat([this._el_2]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_1,
        this._text_3,
        this._text_6
      ]
      ),
      ([] as any[]),
      ([] as any[]).concat([this._el_4])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import36.Icon) && (2 === requestNodeIndex))) { return this._Icon_2_3.context; }
    if (((token === import49.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Item_0_4.context; }
    if (((token === import49.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ItemContent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Item_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._ItemContent_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.icon,'');
    this._Icon_2_3.check_name(currVal_1,throwOnChange,false);
    this._Icon_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset(([] as any[]));
        this._Item_0_4.context._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset([this._Icon_2_3.context]);
        this._Item_0_4.context._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.context.ngAfterContentInit(); }
    }
    const currVal_2:any = this._Icon_2_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'hide',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'\n      ',this.context.$implicit.title,'\n      ');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'\n        ',this.context.$implicit.note,'\n      ');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_5,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_2_3.context.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.itemTapped($event,this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ListPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_ListPage1(viewUtils,parentInjector,declarationEl);
}
class _View_ListPage2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ListPage2,renderType_ListPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'padding','');
    this._text_1 = this.renderer.createText(this._el_0,'\n    You navigated here from ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'b',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.selectedItem.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ListPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_ListPage2(viewUtils,parentInjector,declarationEl);
}