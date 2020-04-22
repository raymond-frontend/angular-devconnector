import { PatternValidation } from "./../../../shared/helpers/password-validation";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  hide: boolean = true;
  menuControl = new FormControl();
  options: String[] = ["one", "two", "three"];
  signUpForm;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formbuilder.group(
      {
        name: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
          ],
        ],
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [
            Validators.required,
            PatternValidation.patternValidator(/\d/, { hasNumber: true }),
            PatternValidation.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            PatternValidation.patternValidator(/[a-z]/, { hasSmallCase: true }),
            PatternValidation.patternValidator(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              { hasSpecialCharacter: true }
            ),
          ],
        ],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: PatternValidation.passwordMatchValidator,
      }
    );
    this.onChanges();
  }

  get email() {
    return this.signUpForm.get("email");
  }

  get name() {
    return this.signUpForm.get("name");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  get confirmPassword() {
    return this.signUpForm.get("confirmPassword");
  }

  onChanges(): void {
    this.signUpForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
