import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardComponent } from './dashboard.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [dashboardComponent],
    exports: [dashboardComponent]
})

export class DashboardComponentModule {}
