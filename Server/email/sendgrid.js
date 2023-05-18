const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

sendgrid.send({
    to:{
        email: "ermystyler@gmail.com",
        name: "Ermystyler",
    },
    from: {
            email: "contact@eklipseglobal.com",
            name: "Eklipse Global",
    },
    templateId: "d-2b7924c1ad1a4bf19805a5ddb15715f8 ",
    dynamicTemplateData: {
        name: "Ermystyler !!",
    }, //
}).then((result) => {
    console.log('email sent', result);
}).catch((error) => {
    console.error(error);
})