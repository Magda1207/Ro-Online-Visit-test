import { Selector, ClientFunction, t } from 'testcafe';

fixture `ED Online visit' - regression test` 
    .page `https://start.ro.co/roman/ed/?utm_expid=.O9vTFADVROq81tYvJb_UdQ.0&utm_referrer=`


export default class Page {
    constructor () {
        this.nextButton = Selector('.flow-question-overlay--in').find('button');
		this.inputField = Selector('.flow-question-overlay--in').find('input'); 
		this.checkBox = Selector('.flow-question-overlay--in').find('.checkbox-label');
		this.textArea = Selector('.flow-question-overlay--in').find('.flow-question-textarea');
		this.genderButton = Selector('.choice-item');
		this.validationMessage = Selector('.form_field-error').innerText;
		this.linkHeaderText = Selector('.modal-title').innerText;
		this.closeButton = Selector('.icon-close');
    }
    async clickButtonWithText (text) {
        await t
            .click((this.nextButton).withText(text));
    }
	
	async enterTextInInputId (id, text) {
        await t
            .typeText((this.inputField).withAttribute('id', id), text);
    }
	async markCheckbox (text) {
        await t
            .click((this.checkBox).withText(text));
    }
	async enterTextInTextArea (text) {
        await t
            .typeText((this.textArea), text);
    }
	async selectGenderButton (gender) {
		if (gender == 'female'){
        await t
            .click(this.genderButton.sibling());
		}
		else {
		await t
            .click(this.genderButton);	
		}
    }
	async checkValidationMessage (id, text) {
        await t
            .expect((this.inputField).withAttribute('id', id).parent().sibling(-1).innerText).eql(text);
    }
	async checkLink (linktext, header) {
        await t
			.click((this.nextButton).withText(linktext))
            .expect(this.linkHeaderText).eql(header)
			.click(Selector(this.closeButton))
    }
}

test('E2E scenario', async () => {
		const p = new Page();
        //Step 1
		await p.enterTextInInputId('temporaryEmail', 'test@test.co');
		await p.enterTextInInputId('firstName', 'John');
		await p.enterTextInInputId('lastName', 'Tester');
		await p.enterTextInInputId('password', 'password123');		
        await p.markCheckbox('I agree');
		await p.clickButtonWithText('START MY VISIT');
		//Step 2
		await p.clickButtonWithText('START MY VISIT');
		//Step 3
		await p.selectGenderButton('male');
		await p.enterTextInInputId('dateOfBirth', '12121970');
		await p.enterTextInInputId('zipcode', '12345');			
		await p.clickButtonWithText('NEXT');
		//Step 4
		await p.clickButtonWithText('CONTINUE')
		//Step 5
		await p.clickButtonWithText('Yes, every time')
		//Step 6
		await p.clickButtonWithText('Gradually but has worsened over time');
		//Step 7
		await p.markCheckbox('When masturbating');
		await p.markCheckbox('When you wake up');
		await p.clickButtonWithText('NEXT');
		//Step 8
		await p.clickButtonWithText('No, it starts hard but never remains hard');	
		//Step 9
		await p.clickButtonWithText('Rarely');	
		//Step 10
		await p.clickButtonWithText('Less than it was');			
		//Step 11
		await p.clickButtonWithText('Yes');	
		//Step 12
		await p.markCheckbox('Viagra (sildenafil)');
		await p.markCheckbox('Cialis (tadalafil)');
		await p.markCheckbox('Levitra (vardenafil)');
		await p.markCheckbox('Staxyn (vardenafil)');
		await p.markCheckbox('Stendra (avanafil)');
		await p.markCheckbox('Penile pump');
		await p.markCheckbox('Penile implant');
		await p.markCheckbox('Penile injections (e.g., alprostadil, bimix, trimix)');
		await p.markCheckbox('Shock wave therapy');
		await p.markCheckbox('Intraurethural therapy (MUSE)');
		await p.markCheckbox('Other treatment');
		await p.clickButtonWithText('NEXT');		
		//Step 13
		await p.enterTextInTextArea('test Step 13');
		await p.clickButtonWithText('SAVE AND CONTINUE');	
		//Step 14
		await p.enterTextInTextArea('test Step 14');
		await p.clickButtonWithText('SAVE AND CONTINUE');	
		//Step 15
		await p.clickButtonWithText('Yes');			
		await p.enterTextInTextArea('test Step 15');	
		await p.clickButtonWithText('SAVE AND CONTINUE');	
		//Step 16
		await p.clickButtonWithText('Yes, but there were issues.');	
		await p.enterTextInTextArea('test Step 16');	
		await p.clickButtonWithText('SAVE AND CONTINUE');	
		//Step 17
		await p.clickButtonWithText('Continue, I know my blood pressure.');			
		//Step 18
		await p.clickButtonWithText('95-120');	
		await p.clickButtonWithText('65–80');	
		await p.clickButtonWithText('SAVE AND CONTINUE');	
		//Step 19
		await p.clickButtonWithText("I DON\’T TAKE ANY MEDICATIONS");
		//Step 20
		await p.clickButtonWithText('No');	
		//Step 21
		await p.clickButtonWithText('No');
		//Step 22
		await p.markCheckbox('None apply to me');	
		await p.clickButtonWithText('NEXT');	
		//Step 23
		await p.markCheckbox('No, I have not felt down, anxious, nervous, etc. in the last 2 weeks.');	
		await p.clickButtonWithText('NEXT');	
		//Step 24
		await p.markCheckbox('No, I do not have any of these conditions');	
		await p.clickButtonWithText('NEXT');	
		//Step 25
		await p.markCheckbox('No, I do not have any of these conditions');	
		await p.clickButtonWithText('NEXT');
		//Step 26
		await p.markCheckbox('None apply to me');	
		await p.clickButtonWithText('NEXT');		
		//Step 27
		await p.markCheckbox('None apply to me');	
		await p.clickButtonWithText('NEXT');
		//Step 28
		await p.markCheckbox('No, I have never used any of these medications');	
		await p.clickButtonWithText('NEXT');		
		//Step 29
		await p.markCheckbox('None apply to me');	
		await p.clickButtonWithText('NEXT');
		//Step 29
		await p.markCheckbox('No, I have never used any recreational drugs');	
		await p.clickButtonWithText('NEXT');
		//Step 30
		await p.clickButtonWithText('No');
		//Step 31
		await p.clickButtonWithText('CONTINUE');
		//Step 32
		await p.clickButtonWithText('6');
		//Step 33
		await p.clickButtonWithText('34');
		//Step 34
		await p.clickButtonWithText('70');
		//Step 35
		await p.clickButtonWithText('50');
		//Step 36
		await p.clickButtonWithText('415');
});

test('Links check', async () => {
		const p = new Page();
		await p.checkLink('terms', 'Terms of use');
		await p.checkLink('privacy policy', 'Privacy policy');
		await p.checkLink('Telehealth', 'Consent to telehealth');
});

test('Validation check', async () => {
		const p = new Page();
		await p.clickButtonWithText('START MY VISIT');
		await p.checkValidationMessage('temporaryEmail', 'Field required');
		await p.checkValidationMessage('firstName', 'Field required');
		await p.checkValidationMessage('lastName', 'Field required');
		await p.checkValidationMessage('password', 'Field required');
		await p.checkValidationMessage('agreedToTos', 'Continue your online visit by checking the box below');
		
		await p.enterTextInInputId('temporaryEmail', 'test@test');	
		await p.checkValidationMessage('temporaryEmail', 'Email format invalid');		
});





