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

  salesOfficeList: any = [
    'ALABANG AFFINITY',
    'ALABANG AGENTS',
    'ALABANG BANCASSURANCE',
    'ALABANG BANKS & FINANCIAL',
    'ALABANG BROKERS',
    'ALABANG DEALERS',
    'ALABANG DIRECT OFFICE',
    'ALABANG GENERAL AGENTS',
    'ASSUMED BUSINESS',
    'BACOLOD AFFINITY',
    'BACOLOD AGENTS',
    'BACOLOD BANCASSURANCE',
    'BACOLOD BANKS & FINANCIAL',
    'BACOLOD BROKERS',
    'BACOLOD DEALERS',
    'BACOLOD DIRECT OFFICE',
    'BACOLOD GENERAL AGENTS',
    'CDO AFFINITY',
    'CDO AGENTS',
    'CDO BANCASSURANCE',
    'CDO BANKS & FINANCIAL',
    'CDO BROKERS',
    'CDO DEALERS',
    'CDO DIRECT OFFICE',
    'CDO GENERAL AGENTS',
    'CEBU AFFINITY',
    'CEBU AGENTS',
    'CEBU BANCASSURANCE',
    'CEBU BANKS & FINANCIAL',
    'CEBU BROKERS',
    'CEBU DEALERS',
    'CEBU DIRECT OFFICE',
    'CEBU GENERAL AGENTS',
    'DAVAO AFFINITY',
    'DAVAO AGENTS',
    'DAVAO BANCASSURANCE',
    'DAVAO BANKS & FINANCIAL',
    'DAVAO BROKERS',
    'DAVAO DEALERS',
    'DAVAO DIRECT OFFICE',
    'DAVAO GENERAL AGENTS',
    'EDSA CALOOCAN AFFINITY',
    'EDSA CALOOCAN AGENTS',
    'EDSA CALOOCAN BANCASSURANCE',
    'EDSA CALOOCAN BANKS &FINANCIAL',
    'EDSA CALOOCAN BROKERS',
    'EDSA CALOOCAN DEALERS',
    'EDSA CALOOCAN DIRECT OFFICE',
    'EDSA CALOOCAN GENERAL AGENTS',
    'GENERIC',
    'GSIS ACCOUNT',
    'HEAD OFFICE',
    'HEAD OFFICE BANKS & FINANCIAL',
    'HO-CABANATUAN AFFINITY',
    'HO-CABANATUAN AGENTS',
    'HO-CABANATUAN BANCASSURANCE',
    'HO-CABANATUAN BANKS &FINANCIAL',
    'HO-CABANATUAN BROKERS',
    'HO-CABANATUAN DEALERS',
    'HO-CABANATUAN DIRECT OFFICE',
    'HO-CABANATUAN GENERAL AGENTS',
    'HO-EDSA CAL AFFINITY',
    'HO-EDSA CAL AGENTS',
    'HO-EDSA CAL BANCASSURANCE',
    'HO-EDSA CAL BANKS &FINANCIAL',
    'HO-EDSA CAL BROKERS',
    'HO-EDSA CAL DEALERS',
    'HO-EDSA CAL DIRECT OFFICE',
    'HO-EDSA CAL GENERAL AGENTS',
    'HO-LAS PINAS AFFINITY',
    'HO-LAS PINAS AGENTS',
    'HO-LAS PINAS BANCASSURANCE',
    'HO-LAS PINAS BANKS & FINANCIAL',
    'HO-LAS PINAS BROKERS',
    'HO-LAS PINAS DEALERS',
    'HO-LAS PINAS DIRECT OFFICE',
    'HO-LAS PINAS GENERAL AGENTS',
    'HO-QA AFFINITY',
    'HO-QA AGENTS',
    'HO-QA BANCASSURANCE',
    'HO-QA BANKS & FINANCIAL',
    'HO-QA BROKERS',
    'HO-QA DEALERS',
    'HO-QA DIRECT OFFICE',
    'HO-QA GENERAL AGENTS',
    'HO-STA ROSA AFFINITY',
    'HO-STA ROSA AGENTS',
    'HO-STA ROSA BANCASSURANCE',
    'HO-STA ROSA BANKS & FINANCIAL',
    'HO-STA ROSA BROKERS',
    'HO-STA ROSA DEALERS',
    'HO-STA ROSA DIRECT OFFICE',
    'HO-STA ROSA GENERAL AGENTS',
    'HO-UN AVE AFFINITY',
    'HO-UN AVE AGENTS',
    'HO-UN AVE BANCASSURANCE',
    'HO-UN AVE BANKS & FINANCIAL',
    'HO-UN AVE BROKERS',
    'HO-UN AVE DEALERS',
    'HO-UN AVE DIRECT OFFICE',
    'HO-UN AVE GENERAL AGENTS',
    'ILOILO AFFINITY',
    'ILOILO AGENTS',
    'ILOILO AGENTS',
    'ILOILO BANCASSURANCE',
    'ILOILO BANKS & FINANCIAL',
    'ILOILO BROKERS',
    'ILOILO DEALERS',
    'ILOILO DIRECT OFFICE',
    'ILOILO DIRECT OFFICE',
    'ILOILO GENERAL AGENTS',
    'KAKAMPI QC 1',
    'KAKAMPI QC 2',
    'KAKAMPI QC 3',
    'KAKAMPI QC 4',
    'LIPA AFFINITY',
    'LIPA AGENTS',
    'LIPA BANCASSURANCE',
    'LIPA BANKS & FINANCIAL',
    'LIPA BROKERS',
    'LIPA DEALERS',
    'LIPA DIRECT OFFICE',
    'LIPA GENERAL AGENTS',
    'LIPA MICRO',
    'MBO AFFINITY',
    'MBO AGENTS',
    'MBO BANCASSURANCE',
    'MBO BANKS & FINANCIAL',
    'MBO BROKERS',
    'MBO DEALERS',
    'MBO DIRECT OFFICE',
    'MBO GENERAL AGENTS',
    'MCO BUTUAN AGENTS',
    'MCO BUTUAN BANKS & FINANCIAL',
    'MCO BUTUAN BROKERS',
    'MCO BUTUAN DEALERS',
    'MCO BUTUAN DIRECT OFFICE',
    'MCO BUTUAN GENERAL AGENTS',
    'MCO CAVITE AGENTS',
    'MCO CAVITE BANKS & FINANCIAL',
    'MCO CAVITE BROKERS',
    'MCO CAVITE DEALERS',
    'MCO CAVITE DIRECT OFFICE',
    'MCO CAVITE GENERAL AGENTS',
    'MCO DAGUPAN AGENTS',
    'MCO DAGUPAN BANKS & FINANCIAL',
    'MCO DAGUPAN BROKERS',
    'MCO DAGUPAN DEALERS',
    'MCO DAGUPAN DIRECT OFFICE',
    'MCO DAGUPAN GENERAL AGENTS',
    'MCO MBO AGENTS',
    'MCO MBO BANKS & FINANCIAL',
    'MCO MBO BROKERS',
    'MCO MBO DEALERS',
    'MCO MBO DIRECT OFFICE',
    'MCO MBO GENERAL AGENTS',
    'MSO ANGELES AGENTS',
    'MSO ANGELES BANKS & FINANCIAL',
    'MSO ANGELES BROKERS',
    'MSO ANGELES DEALERS',
    'MSO ANGELES DIRECT OFFICE',
    'MSO ANGELES GENERAL AGENTS',
    'MSO CEBU AGENTS',
    'MSO CEBU BANKS & FINANCIAL',
    'MSO CEBU BROKERS',
    'MSO CEBU DEALERS',
    'MSO CEBU DIRECT OFFICE',
    'MSO CEBU GENERAL AGENTS',
    'MSO ILOILO BANKS & FINANCIAL',
    'MSO ILOILO BROKERS',
    'MSO ILOILO DEALERS',
    'MSO ILOILO GENERAL AGENTS',
    'MSO MBO AGENTS',
    'MSO MBO BANKS & FINANCIAL',
    'MSO MBO BROKERS',
    'MSO MBO DEALERS',
    'MSO MBO DIRECT OFFICE',
    'MSO MBO GENERAL AGENTS',
    'MSO PARANAQUE AGENTS',
    'MSO PARANAQUE BROKERS',
    'MSO PARANAQUE DIRECT OFFICE',
    'MSO PARANAQUE GENERAL AGENTS',
    'MSO QC AGENTS',
    'MSO QC BANKS & FINANCIAL',
    'MSO QC BROKERS',
    'MSO QC DEALERS',
    'MSO QC DIRECT OFFICE',
    'MSO QC GENERAL AGENTS',
    'OFW BOCOBO',
    'OFW MBO',
    'OFW POEA',
    'ORTIGAS AGENTS',
    'ORTIGAS BANKS & FINANCIAL',
    'ORTIGAS BROKERS',
    'ORTIGAS DEALERS',
    'ORTIGAS DIRECT OFFICE',
    'ORTIGAS GENERAL AGENTS',
    'QC DISTRICT 2',
    'QC DISTRICT 5',
    'QUEZON AVE AFFINITY',
    'QUEZON AVE AGENTS',
    'QUEZON AVE BANCASSURANCE',
    'QUEZON AVE BANKS & FINANCIAL',
    'QUEZON AVE BROKERS',
    'QUEZON AVE DEALERS',
    'QUEZON AVE DIRECT OFFICE',
    'QUEZON AVE GENERAL AGENTS',
    'SAN FERNANDO AFFINITY',
    'SAN FERNANDO BANCASSURANCE',
    'SANTIAGO AFFINITY',
    'SANTIAGO AGENTS',
    'SANTIAGO BANCASSURANCE',
    'SANTIAGO BANKS & FINANCIAL',
    'SANTIAGO BROKERS',
    'SANTIAGO DEALERS',
    'SANTIAGO DIRECT OFFICE',
    'SANTIAGO GENERAL AGENTS',
    'SFDO AGENTS',
    'SFDO BANKS & FINANCIAL',
    'SFDO BROKERS',
    'SFDO DEALERS',
    'SFDO DIRECT OFFICE',
    'SFDO GENERAL AGENTS',
    'UN AVENUE AFFINITY',
    'UN AVENUE AGENTS',
    'UN AVENUE BANCASSURANCE',
    'UN AVENUE BANKS & FINANCIAL',
    'UN AVENUE BROKERS',
    'UN AVENUE DEALERS',
    'UN AVENUE DIRECT OFFICE',
    'UN AVENUE GENERAL AGENTS',
    'WACK WACK EDSA AFFINITY',
    'WACK WACK EDSA AGENTS',
    'WACK WACK EDSA BANCASSURANCE',
    'WACK WACK EDSA BANKS & FIN',
    'WACK WACK EDSA BROKERS',
    'WACK WACK EDSA DEALERS',
    'WACK WACK EDSA DIRECT OFFICE',
    'WACK WACK EDSA GENERAL AGENTS'
  ];

  fullName: any;
  email: any;
  contact: any;
  office: any;

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
    console.log(this.salesOfficeList);
  }
}
