import React from 'react'
import {useSelector} from 'react-redux'
import { LogicHandler } from "../components/exporttemplates/LogicHandler";

const ACCOUNTS_DOCUMENT = () => {
  const selector=useSelector(state=> state.accountsslice)
  const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));
  const isAllGood = LogicHandler();

  return (
<div className="px-[1.5rem] sm:px-[5rem] lg:px-[8rem] xl:px-[17rem] py-[3rem]">
     <section className="p-[1rem] sm:p-[2rem] lg:p-[3rem] border border-black relative">
     {LOGINDETAILS !== null && !isAllGood ? <></> :<div className="w-full h-full absolute top-0 right-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-5" />} 
     <p className='flex flex-col font-bold'>
       <span>{selector.firstName + "  " + selector.middleName+ " " + selector.lastName}</span>
       <span>
        {selector.address}
       </span>
       <span>
        {selector.city +"  "+ selector.state+"  "+ selector.postalcode}
       </span>
      </p>

      <br/>
      <p className='font-bold'>
        <span className='mr-[10px] sm:mr-[15px] lg:mr-[20px]'>SSN: {selector.number}</span>  DOB: {selector.dob} 
      </p>
      <br/>
      <br/>

      <p>
      I am communicating because as in, Civil Action No. 1:23-cv-2659 FEDERAL TRADE
COMMISSION, and CONSUMER FINANCIAL PROTECTION BUREAU, Plaintiffs, v.
TRANSUNION RENTAL SCREENING SOLUTIONS, INC., a Delaware corporation, and
TRANS UNION LLC, a Delaware limited liability company, Defendants, I am also a victim
of said case. <br/>
      <br/>
On numerous recent occasions I have checked my credit reports and noticed accounts
that are not mine! Please remove the accounts immediately. Pursuant to § 621 of the
FCRA, 15 U.S.C. § 1681s, a violation of the FCRA constitutes an unfair or deceptive act or
practice in or affecting commerce, in violation of Section 5(a) of the FTC Act, 15 U.S.C. §
45(a). The List of accounts below has violated my federally protected consumer rights to
privacy and confidentiality under 15 USC 1681. <br/>
      <br/>
The FCRA imposes several obligations on Consumer Reporting Agencies, including
obligations to: (1) follow reasonable procedures to assure the maximum possible
accuracy of the information in Consumer Reports, 15 U.S.C. § 1681e(b), and (2) upon a
consumer’s request, disclose to the consumer all information contained in the
consumer’s file and the sources of the information, 15 U.S.C. § 1681g(a). 16. Pursuant to
§ 621 of the FCRA, 15 U.S.C. § 1681s, a violation of the FCRA constitutes an unfair or
deceptive act or practice in or affecting commerce, in violation of Section 5(a) of the FTC
Act, 15 U.S.C. § 45(a).<br/>
      <br/>
Under 15 U.S.C. § 1681c-2 a consumer reporting agency shall block the reporting of any
information in the file of a consumer that the consumer identifies as information that
resulted from an alleged identity theft, not later than 4 business days after the date of
receipt. It has been 30 days and you are in violation of this law because I am a victim of
identity theft! These unverified/unvalidated accounts should not be furnished on my
consumer report as they are in violation Under 15 U.S.C. § 1681b - Permissible purposes
of consumer reports (a) in general subject to subsection (c) any consumer reporting
agency may furnish a consumer report under the following circumstances, and no other:
(2) In accordance with the WRITTEN INSTRUCTION of the consumer to whom it relates. I
never gave any consumer reporting agency any WRITTEN CONSENT to report anything
on my consumer report which violates my rights as a federal protected consumer.<br/>
      <br/>
      </p>

      <p>
        <span className='font-bold'>Instruction: Please remove the false reporting listed accounts :</span><br/>
        {selector.account + "  " + selector.disputeReasonInBulletList}
      </p>
      <br/>
      <br/>

      <p>
      15 U.S.C. 1681s-2 ( A ) ( 1 ) A person shall not furnish any information relating to a
consumer to any consumer reporting agency if the person knows or has reasonable
cause to believe that the information is inaccurate.<br/>
      <br/>
If said accounts are in fact believed to be correct, provide documentation from the
original creditor bearing my signature as validation that in fact those accounts are
legitimate. That documentation is to be sent to the Consumer Financial Protection
Bureau (“CFPB”) as well as sent to me via certified mail, as per the Fair Credit Reporting
Act 15 U.S. Code 1681i. Procedure in case of disputed accuracy. Also 15 U.S. Code 1611.
Criminal liability for willful and knowing violation. I am keeping a careful record of your
actions, including Method of Verification, I DO NOT CONSENT to e-oscar or any means of
automated verification. In maintaining a careful record, I am filing a complaint with the
Consumer Financial Protection Bureau for your erroneous reporting of the item (s) and
non-compliance.<br/>
      <br/>
I further remind you, as in Wegner vs. TransUnion Corp., No. 95-6445
(C.D.Cal.Nov.14,1995 ), you may be liable for the willful non-compliance, and for failure to
respond satisfactorily I will seek {'$1000.00'} per violation for : 1 ) Defamation 2 ) Negligent
Enablement of Identity Fraud 3 ) Violations of the Fair Credit Reporting Act. Please
govern yourself accordingly,
      </p>
      <br/>
      <br/>

      <p className='font-bold'>
      <br/>
Thank you for your assistance.
<br/>
<br/>
Regards,
      </p>

      <p className='font-bold'>
        {selector.firstName+ "  "+ selector.lastName}
        <br/>
        {selector.number}
      </p>

       </section>
    </div>
  )
}

export default ACCOUNTS_DOCUMENT
