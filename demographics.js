define(['questAPI','underscore'], function(Quest,_){

    var API = new Quest();
    var isTouch = API.getGlobal().isTouch;

    /**
	* Settings
	*/
    API.addSettings('logger',{pulse: 3});

    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        header: 'Demographics',
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 6' : 'Page <%= pagesMeta.number %> out of 6'
    });

    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: false,
        required : true,
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer' 
                : 'Please select an answer'
        },
        autoSubmit:true,
        numericValues:true
    });

    API.addQuestionsSet('singleChoice',{
        inherit: 'basicQ',
        type: 'selectOne', 
        autoSubmit:false,
    });

    API.addQuestionsSet('singleChoice1',{
        inehrit: 'basicQ',
        type: 'selectOne',
        autoSubmit:false
    });

    API.addQuestionsSet('text',{
        inherit: 'basicQ',
        type: 'text',
        dflt:'n/a',
        noSubmit:false,
        required: true
    });

    API.addQuestionsSet('singleChoicedrop',{
        inherit: 'basicQ',
        autoSubmit:false,
        type: 'dropdown'
    });

    API.addQuestionsSet('multiChoice',{
        inherit: 'basicQ',
        type: 'selectMulti'
    });

    API.addQuestionsSet('boolean',{
        inherit: 'basicQ',
        type: 'selectOne',
        buttons: true,
        answers : [
            {text:'Yes', value:1},
            {text:'No', value:0}
        ]
    });
    /**
	* Actual questions
	*/

    API.addQuestionsSet('age',{
        inherit:'singleChoicedrop',
        name:'age',
        stem:'What is your current age?',
        helpText: 'If you are under the age of 18 please exit the survey now.',
        answers: [
            {text:'18', value:18},
            {text:'19',value: 19},
            {text:'20', value:20},
            {text:'21', value:21},
            {text:'22', value:22},
            {text:'23', value:23},
            {text:'24', value:24},
            {text:'25', value:25},
            {text:'26', value:26},
            {text:'27', value:27},
            {text:'28', value:28},
            {text:'29', value:29},
            {text:'30', value:30},
            {text:'31', value:31},
            {text:'32', value:32},
            {text:'33', value:33},
            {text:'34', value:34},
            {text:'35', value:35},
            {text:'36', value:36},
            {text:'37', value:37},
            {text:'38', value:38},
            {text:'39', value:39},
            {text:'40', value:40},
            {text:'41', value:41},
            {text:'42', value:42},
            {text:'43', value:43},
            {text:'44', value:44},
            {text:'45', value:45},
            {text:'46', value:46},
            {text:'47', value:47},
            {text:'48', value:48},
            {text:'49', value:49},
            {text:'50', value:50},
            {text:'51', value:51},
            {text:'52', value:52},
            {text:'53', value:53},
            {text:'54', value:54},
            {text:'55', value:55},
            {text:'56', value:56},
            {text:'57', value:57},
            {text:'58', value:58},
            {text:'59', value:59},
            {text:'60', value:60},
            {text:'61', value:61},
            {text:'62', value:62},
            {text:'63', value:63},
            {text:'64', value:64},
            {text:'65', value:65},
            {text:'66', value:66},
            {text:'67', value:67},
            {text:'68', value:68},
            {text:'69', value:69},
            {text:'70', value:70},
            {text:'71', value:71},
            {text:'72', value:72},
            {text:'73', value:73},
            {text:'74', value:74},
            {text:'75', value:75},
            {text:'76', value:76},
            {text:'77', value:77},
            {text:'78', value:78},
            {text:'79', value:79},
            {text:'80', value:80},
            {text:'81', value:81},
            {text:'82', value:82},
            {text:'83', value:83},
            {text:'84', value:84},
            {text:'85', value:85},
            {text:'86', value:86},
            {text:'87', value:87},
            {text:'88', value:88},
            {text:'89', value:89},
            {text:'90', value:90},
            {text:'91', value:91},
            {text:'92', value:92},
            {text:'93', value:93},
            {text:'94', value:94},
            {text:'95', value:95},
            {text:'96', value:96},
            {text:'97', value:97},
            {text:'98', value:98},
            {text:'99', value:99},
            {text:'100+', value:100},

        ]
    });

    API.addQuestionsSet('genderIdentity',{
        inherit: 'singleChoice',
        name: 'genderIdentity',
        stem: 'What gender do you identify as?',
        answers: [
            {text:'Male',value:1},
            {text:'Female',value:2}, 
            {text:'Non-binary/genderfluid/genderqueer',value:3}, 
            {text:'Other/Don\'t know',value:0}, 
        ]
    });

    API.addQuestionsSet('genderOther',{
        inherit:'text',
        name:'genderOther',
        stem:'If \'Other\' please specify.'
    });

    API.addQuestionsSet('race',{
        inherit: 'multiChoice',
        name: 'race',
        stem: 'Please select all of the following which describe your race/ethinicity.',
        autoSubmit: false,
        answers: [
            {text:'American Indian/Native American/Alaska Native',value:1},
            {text:'Asian',value:2},
            {text:'Black/African American',value:3},
            {text:'Latino or Hispanic',value:4},
            {text:'Middle Eastern/North Africa',value:5},
            {text:'Native Hawaiian/Other Pacific Islander',value:6},
            {text:'White/European American',value:7},
            {text:'Other/Unknown',value:0}
        ]
    });

    API.addQuestionsSet('raceOther',{
        inherit:'text',
        name:'raceOther',
        stem:'If \'Other\' please specify.'
    });

    API.addQuestionsSet('major',{
        inherit: 'multiChoice',
        name: 'major',
        stem: 'What is your major?',
        answers: [
            {text:'Biology',value:1},
            {text:'Biochemistry',value:2},
            {text:'Chemistry',value:3},
            {text:'Health Science',value:4},
            {text:'Kinesiology',value:5},
            {text:'Nursing',value:6},
            {text:'Pre-Nursing',value:7},
            {text:'Psychology',value:8},
            {text:'Radiologic Technology',value:9},
            {text:'Sports Medicine',value:10},
            {text:'Undeclared',value:11},
            {text:'Other', value:0}
        ]
    });

    API.addQuestionsSet('majorOther',{
        inherit:'text',
        name:'majorOther',
        stem:'If \'Other\' please specify.'
    });

    API.addQuestionsSet('hlthCareer', {
        inherit: 'singleChoice',
        name:'hlthCareer',
        autoSubmit:false,
        stem:'Are you planning on pursuing a career in healthcare or a related field?',
        answers: [
            {text:'Yes', value:1},
            {text:'Maybe', value:2},
            {text:'No', Value:0}
        ]

    });

    API.addQuestionsSet('hlthFuture', {
        inherit: 'multiChoice',
        name:'hlthFuture',
        stem:'What area(s) of healthcare are you looking to go into?',
        answers: [
            {text:'Administrator', value:1},
            {text:'Clinical Psychologist', value:2},
            {text:'Social Worker', value:3},
            {text:'Mental health Therapist (MFT, LMFT, LPC, etc.)', value:4},
            {text:'Nurse/Nurse Practitioner', value:5},
            {text:'Occupational Therapist', value:6},
            {text:'Physical Therapist', value:7},
            {text:'Physician', value:8},
            {text:'Physician Assistant/Associate', value:9},
            {text:'Public Health Professional', value:10},
            {text:'Researcher', value:11},
            {text:'Radiologic Technologist', value:12},
            {text:'Other', value:0}
        ]
    });

    API.addQuestionsSet('hlthFutureOther',{
        inherit:'text',
        name:'hlthFutureOther',
        stem:'If \'Other\' please specify.'
    });

    API.addQuestionsSet('hlthWork', {
        inherit:'singleChoice1',
        name:'hlthWork',
        stem:'Do you currently or have you ever worked in healthcare?',
        answers:[
            {text:'Yes', value:1},
            {text:'No', value:0}
        ]

    });

    API.addQuestionsSet('occuSelf',{
        inherit: 'multiChoice',
        name: 'occuSelf',
        stem: 'Which of the following roles have you currently or previously held?(check all that apply).',
        answers: [
            {text:'Certified Nursing Assitant', value:1},
            {text:'Emergency Medical Technician', value:2},
            {text:'Home Health Aide', value:3},
            {text:'Medical Assistant', value:4},
            {text:'Pharmacy Technician', value:5},
            {text:'Phlebotomist', value:6},
            {text:'Physical Therapy Assistant', value:7},
            {text:'Surgical Technician', value:8},
            {text:'Nonclinical', value:9},
            {text:'Other', value:0}
        ]
    });

    API.addQuestionsSet('occuSelfOther',{
        inherit:'text',
        name:'occuSelfOther',
        stem:'If \'Other\' please specify.'
    });

    API.addQuestionsSet('workExp',{
        inherit: 'singleChoicedrop',
        required:true,
        name: 'workExp',
        stem: 'How long have you worked in healthcare?',
        answers:[
            {text:'Less than 1 month', value:0},
            {text:'1 month', value:101},
            {text:'2 months', value:102},
            {text:'3 months', value:103},
            {text:'4 months', value:104},
            {text:'5 months', value:105},
            {text:'6 months', value:106},
            {text:'7 months', value:107},
            {text:'8 months', value:108},
            {text:'9 months', value:109},
            {text:'10 months', value:110},
            {text:'11 months', value:111},
            {text:'12 months', value:112},
            {text:'1 year', value:1},
            {text:'2 years', value:2},
            {text:'3 years', value:3},
            {text:'4 years', value:4},
            {text:'5 years', value:5},
            {text:'6 years', value:6},
            {text:'7 years', value:7},
            {text:'8 years', value:8},
            {text:'9 years', value:9},
            {text:'10 years', value:10},
            {text:'11 years', value:11},
            {text:'12 years', value:12},
            {text:'13 years', value:13},
            {text:'14 years', value:14},
            {text:'15 years', value:15},
            {text:'16 years', value:16},
            {text:'17 years', value:17},
            {text:'18 years', value:18},
            {text:'19 years', value:19},
            {text:'20 years', value:20},
            {text:'21 years', value:21},
            {text:'22 years', value:22},
            {text:'23 years', value:23},
            {text:'24 years', value:24},
            {text:'25 years', value:25},
            {text:'26 years', value:26},
            {text:'27 years', value:27},
            {text:'28 years', value:28},
            {text:'29 years', value:29},
            {text:'30 years', value:30},
            {text:'31 years', value:31},
            {text:'32 years', value:32},
            {text:'33 years', value:33},
            {text:'34 years', value:34},
            {text:'35 years', value:35},
            {text:'36 years', value:36},
            {text:'37 years', value:37},
            {text:'38 years', value:38},
            {text:'39 years', value:39},
            {text:'40 years', value:40},
            {text:'41+ years', value:41},
        ]
    });

    API.addQuestionsSet('cannPersonal',{
        inherit:'singleChoice',
        name: 'cannPersonalnow',
        stem:'Do you currently/have you ever used marijuana (even once)?',
        answers:[
            {text:'Yes, for recreational use only', value:2},
            {text:'Yes, for medical use only', value:1},
            {text:'Yes, for both recreational and medical use', value:3},
            {text:'No', value:0}
        ]
    });

    if (isTouch) API.addSequence([
        {
            inherit:'basicPage',
            questions:[
                {inherit:'age'},
                {inherit: 'genderIdentity'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.genderIdentity.response',to:0}],
                    data: [
                        {inherit:'genderOther'}
                    ]
                }
                  
            ]
        },

        {
            inherit: 'basicPage',
            questions: [ 
                {inherit:'race', autoSubmit:true},
                {inherit:'raceOther'}
            ]
        },

        {
            inherit: 'basicPage',
            questions:[
                {inherit: 'major'},
                {inherit:'majorOther'}
            ]
        },

        {inherit: 'basicPage',
            questions:[
                {inherit:'hlthCareer'},
                {
                    mixer:'multiBranch',
                    remix:true,
                    branches:[
                        {
                            conditions:[
                                {compare: 'questions.hlthCareer.response',to:1}
                            ],
                            data: [
                                {inherit:'hlthFuture'},
                                {inherit:'hlthFutureOther'}
                            ]
                        },
                    
                        {
                            conditions:[
                                {compare:'questions.hlthCareer.response', to:2}
                            ],
                            data: [
                                {inherit:'hlthFuture'},
                                {inherit:'hlthFutureOther'}
                            ]
                        }
                        ]
                    }
            ]
        },

        {
            inherit:'basicPage',
            questions:[
                {inherit:'hlthWork'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'occuSelf'},
                        {inherit:'occuSelfOther'}
                    ],
                }, 
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'workExp'}
                    ]
                },            
            ],
        },

        {
            inherit:'basicPage',
            questions: [{inherit:'cannPersonal'}]
        },
    ]);

    if (!isTouch) API.addSequence([
        {
            inherit:'basicPage',
            questions:[
                {inherit:'age'},
                {inherit: 'genderIdentity'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.genderIdentity.response',to:0}],
                    data: [
                        {inherit:'genderOther'}
                    ]
                }
                  
            ]
        },
        
        {
            inherit: 'basicPage',
            questions: [ 
                {inherit:'race', autoSubmit:true},
                {inherit:'raceOther'}
            ]
        },
        {
            inherit: 'basicPage',
            questions:[
                {inherit: 'major'},
                {inherit:'majorOther'}
            ]
        },
        {inherit: 'basicPage',
            questions:[
                {inherit:'hlthCareer'},
                {
                    mixer:'multiBranch',
                    remix:true,
                    branches:[
                        {
                            conditions:[
                                {compare: 'questions.hlthCareer.response',to:1}
                            ],
                            data: [
                                {inherit:'hlthFuture'},
                                {inherit:'hlthFutureOther'}
                            ]
                        },
                    
                        {
                            conditions:[
                                {compare:'questions.hlthCareer.response', to:2}
                            ],
                            data: [
                                {inherit:'hlthFuture'},
                                {inherit:'hlthFutureOther'}
                            ]
                        }
                        ]
                    }
            ]
        },
        {
            inherit:'basicPage',
            questions:[
                {inherit:'hlthWork'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'occuSelf'},
                        {inherit:'occuSelfOther'}
                    ],
                }, 
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'workExp'}
                    ]
                },            
            ],
        },
       /* {
            inherit: 'basicPage',
            questions: [
                // minor occupation
                
            ]
        },*/
        {
            inherit:'basicPage',
            questions: [{inherit:'cannPersonal'}]
        },
    ]);

    return API.script;
});