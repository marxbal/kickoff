import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Globals
} from '../../utils/global';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {
  isRegistered = false;
  registrationForm: FormGroup;
  agentCode: string;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      agentCode: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      office: ['', Validators.required]
    });
  }

  get content() {
    return Globals.content;
  }

  get agent() {
    return Globals.agent;
  }

  onSubmit(): void {
    var savedList = localStorage.getItem('registeredList');

    let registeredList = [];
    if (savedList != '' && savedList != null) {
      registeredList = JSON.parse(savedList);
    }

    let validAgentCode = true;
    registeredList.forEach(user => {
      if (this.registrationForm.value.agentCode === user.agentCode) {
        validAgentCode = false;
      }
    });

    if (validAgentCode) {
      let userDetails = {
        'agentCode': this.registrationForm.value.agentCode,
        'fullName': this.registrationForm.value.fullName,
        'email': this.registrationForm.value.email,
        'contact': this.registrationForm.value.contact,
        'office': this.registrationForm.value.office,
      };

      this.registrationForm.reset();
      this.isRegistered = false;
      registeredList.push(userDetails);
      localStorage.setItem("registeredList", JSON.stringify(registeredList));
      Globals.setContent('registered');
    } else {
      this.isRegistered = true;
    }
  }

  ngOnInit() {
    var agent = Globals.agent;
    this.agentCode = agent[0];
  }
}
