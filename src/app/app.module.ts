import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './components/events/events.component';
@NgModule({
	declarations: [ AppComponent, EventComponent, EventsComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
