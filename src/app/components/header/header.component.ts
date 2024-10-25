import { RouterLink, ActivatedRoute } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lo: boolean = true;
  userName: string = '';
  constructor(private route: ActivatedRoute,private router:Router, private ser: ServicesService) {}

  ngOnInit(): void {
   this.ser.getUsernName().subscribe(result=>{
this.userName=result;
   })
  }

  gotoLoginPage(): void {
    this.router.navigate(['/login']);
    this.lo = false;
  }

  Home(): void {
    this.router.navigate(['/home']);
  }
}
