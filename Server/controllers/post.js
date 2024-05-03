const pool = require('../config/sqlCon');

async function getpatient(Pid){
    const res = await pool.query(`SELECT * FROM userdata JOIN hospitalisationdata ON userdata.Pid= hospitalisationdata.Pid WHERE userdata.Pid = ?`, [Pid]);
    return res;
}

const findpatient = async (req, res) => { 
    try {
        const aadharNumber = req.body.aadharNumber;
        const patient = await getpatient(aadharNumber); 
        res.json(patient[0][0]); 
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

async function getuser(Pid){
    const res1 = await pool.query(`SELECT * FROM usertable JOIN hospitalisationdata ON usertable.Pid= hospitalisationdata.Pid WHERE usertable.Pid = ?`, [Pid]);
    const res2 = await pool.query(`SELECT * FROM userdata JOIN hospitalisationdata ON userdata.Pid= hospitalisationdata.Pid WHERE userdata.Pid = ?`, [Pid]);
    return [res1, res2];
}

const finduser = async (req, res) => { 
    try {
        //console.log("Hua hai call");
        const aadharNumber = req.body.aadharNumber;
        const patient = await getuser(aadharNumber);
        //console.log(patient[1][0][0]); 
        const patientdata = patient[0][0][0];
        const patientdata2 = patient[1][0][0]
        res.json([patientdata, patientdata2]); 
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

async function getrole(email){
    const res = await pool.query(`SELECT role FROM roles WHERE emailID = ? `, String(email) ); //!COMPLETE QUERY
    return res;
}

const checkrole = async (req, res) => {
    try{
        const email = req.body.email;
        const role = await getrole(email);
        res.json(role[0][0]);
    } catch(error){
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}


module.exports = {
    findpatient,
    checkrole,
    finduser
  };
