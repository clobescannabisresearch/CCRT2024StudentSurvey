define(['questAPI'], function(Quest){
    var API = new Quest();
    var isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/

    API.addCurrent({
		baseURL: './images/',
    });

    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Student ID', 
        autoFocus:true,
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer'
                : 'Please select an answer'
        },
        autoSubmit:'true',
        numericValues:'true',
    });

    API.addQuestionsSet('text',{
        inherit: 'basicQ',
        type: 'text',
        noSubmit:false
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('studentID',{
        inherit : 'text',
        name: 'studentID',
        stem: 'Please provide your student ID number'
    });

    API.addSequence([
        {
            mixer : 'wrapper', 
            data : [
                        {
                        inherit:'basicPage', 
                        questions : {inherit:'studentID'}           
                        } 
                    ]
                },
    ]);

    return API.script;
});
