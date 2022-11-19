import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpsRequestInterceptor } from "./httpsRequestInterceptor.interceptor";

@NgModule({
  providers: [{
     provide: HTTP_INTERCEPTORS,
     useClass: HttpsRequestInterceptor,
     multi: true,
  }]
})

export class HttpsRequestInterceptorModule { }
