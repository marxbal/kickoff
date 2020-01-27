import {
  Component,
  OnInit
} from '@angular/core';
import {
  Globals
} from '../../utils/global';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  setPage(val: String) {
    Globals.setPage(val);
    Globals.setContent('register');
    this.router.navigateByUrl('/template');
  }

  logout() {
    this.router.navigateByUrl('login');
  }

}
