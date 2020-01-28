import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Globals
} from '../../utils/global';
import {
  HttpClient
} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  users: string[];

  constructor(private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) {
    this.createForm();
  }

  ngOnInit() {
    this.getUserList();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  getUserList() {
    this.http.get('./assets/file/agentProduction.csv', {
      responseType: 'text'
    }).subscribe(
      data => {
        this.users = data.split('\n');
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    Globals.setPage('congrats');
    this.getUsernameDetails(this.username);
    this.router.navigateByUrl('/template');
  }

  getUsernameDetails(val: String) {
    var keepGoing = true;
    this.users.forEach(user => {
      var agent = user.split(',');
      if (keepGoing) {
        if (val.trim() == agent[0].trim()) {
          Globals.setAgent(agent);
          keepGoing = false;
          if (Number(agent[4]) > 100000) {
            Globals.setContent('certified');
          } else {
            Globals.setContent('continue');
          }
        } else {
          Globals.setAgent([val.toString()]);
          Globals.setContent('register');
        }
      }
    });
  }
}