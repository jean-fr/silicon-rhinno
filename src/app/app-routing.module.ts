import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
	{
		path: '',
		component: EventsComponent
	},
	{
		path: 'event/:id',
		component: EventComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
