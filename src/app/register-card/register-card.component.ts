import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { getISOWeek } from 'date-fns';

// 发送表单数据到虚拟后端接口。
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  dob: Date = new Date();

  submitForm(): void {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;

      // 模拟后端请求，使用 setTimeout 模拟异步请求
      setTimeout(() => {
        // 模拟成功响应
        console.log('Form Data:', formData);
        this.message.success('Successfully registered！');
      }, 1000);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  genderChange(value: string): void {
    this.validateForm.get('note')!.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService) {
    this.validateForm = this.fb.group({
      firstName: '',
      lastName: '',
      gender: '',
      job: '',
      dob: ''
    });
  }

  ngOnInit(): void {
    //表单验证
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.maxLength(20), Validators.pattern('[^0-9]*')]],
      lastName: [null, [Validators.required, Validators.maxLength(20), Validators.pattern('[^0-9]*')]],
      gender: [null, [Validators.required]],
      job: [null, [Validators.required, Validators.minLength(4), Validators.pattern('[^0-9]*')]],
      dob: [null, [Validators.required]]
    });
  }
}
