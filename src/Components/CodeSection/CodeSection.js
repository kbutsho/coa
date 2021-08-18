import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import "./CodeSection.css";

const CodeSection = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div className="section">
                    <h4 className="my-3 text-center">Initializing the data segment</h4>
                    <div className="scroll-box">
                        <div className="text">
                            .MODEL LARGE <br />
                            .STACK 1000H  <br />
                            .DATA  <br /> <br />
                            start1 DB 10,13,'**** COMPUTER ORGANIZATION AND ARCHITECTURE(SECTION-A) ****$'  <br />
                            start2 DB 10,13,'**** FACULTY: MD. NAZMUL HOSSAIN ****$' <br />
                            start3 DB 10,13,'**** GROUP NUMBER:6 ****$' <br />
                            start4 DB 10,13,'**** GROUP MEMBERS: ****$' <br />
                            start5 DB 10,13,'**** MD. EMRUL HASAN EMON, 19-40357-1 ****$' <br />
                            start6 DB 10,13,'**** AFIFA TAZREMIN OISHI, 19-40028-1 ****$' <br />
                            start7 DB 10,13,'**** SM MUNTASIR RAHMAN,18-39197-3 ****$' <br />
                            start8 DB 10,13,'**** RAYHAN RAHMAN, 17-35963-3 ****',10,13,'$' <br />
                            MSG1 DB 10,13,10,13,'              **** WELCOME TO VEHICLE PLACING MANAGEMENT SYSTEM <br /> <br />****$'  <br />
                            MSG2 DB 10,13,10,13,'  ENTER CHOICE :  $'  <br />
                            MSG3 DB 10,13,10,13,'     WHAT TYPE OF VEHICLE SHOULD YOU PARKING(ENTER YOUR CHOSE)     $'  <br />



                            C1 DB 10,13,'  **          1.BIKE ( NORMAL )                **$' <br />
                            C2 DB 10,13,'  **          2.PICKUP VAN ( MEDIUM )          **$'<br />
                            C3 DB 10,13,'  **          3.PICKUP VAN ( LARGE )           **$'<br />
                            C4 DB 10,13,'  **          4.PICKUP VAN ( SHIFTER )         **$'<br />
                            C5 DB 10,13,'  **          5.MICRO ( HIACE)                 **$'<br />
                            C6 DB 10,13,'  **          6.MICRO ( MINI)                  **$'<br />



                            MSG4 DB 10,13,10,13,'*** CHOISE YOUR PLACE FROM THE MENU ***$'   <br />

                            ;BIKE ITEM   <br />
                            BIKE1 DB 10,13,'  **   1.BANASEE (BLOCK B,HOUSE NO-1)                              30/-     **$'    <br />
                            BIKE2 DB 10,13,'  **   2.MIRPUR STADIUM ROAD (20/1 NO BUULDING)                    40/-     **$'   <br />
                            BIKE3 DB 10,13,'  **   3.BASUNDHARA RESIDENTIAL AREA (Black-D,HOUSE NO 30/B)       60/-     **$'   <br />
                            BIKE4 DB 10,13,'  **   4.MIRPUR 12 (HOUSE NO-22/C)                                 20/-     **$'   <br />
                            BIKE5 DB 10,13,'  **   5.MOTIJHEEL (ARAMBAG AREA,HOUSE NO 9/B)                     20/-     **$'   <br />
                            BIKE6 DB 10,13,'  **   6.SHABAG (NEW MARKET AREA,HOUSE NO 40/D)                    70/-     **$'   <br />
                            BIKE7 DB 10,13,'  **   7.ABDULLAHPUR ( HOUSE 21-B)                                 80/-     **$'   <br />
                            BIKE8 DB 10,13,'  **   8.SHER-R BAMGLA NAGAR (NEAR THANA AREA,HOUSE NO 30/C)       70/-     **$'   <br />
                            BIKE9 DB 10,13,'  **   9.GULSHAN 1 (ROAD 12,HOUSE NO:21,NEAR GULSHAN THANA)        50/-     **$'   <br />

                            <br />  <br />  <br />


                            ;PICKUP VAN ( MEDIUM ) ITEM   <br />  <br />

                            PICKM1 DB 10,13,'  **   1.HATIRJHEEL LAKE AREA (HOUSE NO 2D)                       60/-    **$'   <br />
                            PICKM2 DB 10,13,'  **   2.KAZIPARA (MIRPUR AREA)                                   80/-    **$'   <br />
                            PICKM3 DB 10,13,'  **   3.AGARGAON (SANSOD VOBON AREA)                             30/-    **$' <br />
                            PICKM4 DB 10,13,'  **   4.BANANI RESENDIAL AREA                                    90/-    **$'<br />
                            PICKM5 DB 10,13,'  **   5.KHILKET AREA (21/1 NO SUJALPUR ROAD)                     20/-    **$'<br />
                            PICKM6 DB 10,13,'  **   6.BADDA (HOUSE NO 33,ROAD NO 3)                            40/-    **$' <br />
                            PICKM7 DB 10,13,'  **   7.SATARKUL RESENDIAL AREA ( HOUSE NO 33/1)                 30/-    **$' <br />
                            PICKM8 DB 10,13,'  **   8.GABTOLI MAZAR ROAD                                       30/-    **$' <br />
                            PICKM9 DB 10,13,'  **   9.SAVAR AREA (NEAR ANAM MEDICZL COLLEGE)                   70/-    **$' <br />
                            <br /><br /><br /><br />






                            ;PICKUP VAN ( LARGE ) ITEM <br /> <br />

                            PICKL1 DB 10,13,'  **  1.JURAIN (SHILPO AREA,HOUSE NO 22/B)                        60/-    **$' <br />
                            PICKL2 DB 10,13,'  **  2.DANIA AREA (HOUSE 22)                                     80/-    **$' <br />
                            PICKL3 DB 10,13,'  **  3.NIMTOLI (NEAR BAZAR)                                      80/-    **$' <br />
                            PICKL4 DB 10,13,'  **  4.SUTRAPUR AREA (RESIDENTIAL AREA)                          40/-    **$' <br />
                            PICKL5 DB 10,13,'  **  5.PALTAN AREA (HOUSE NO 21/D)                               50/-    **$' <br />
                            PICKL6 DB 10,13,'  **  6.KOTWALI (NEAR THANA AREA)                                 70/-    **$' <br />
                            PICKL7 DB 10,13,'  **  7.LALBAG (NEAR CHADNI HOTEL,HOUSE NO 22)                    60/-    **$' <br />
                            PICKL8 DB 10,13,'  **  8.SHYAMPUR (NEAR BRTC COUNTER)                              60/-    **$' <br />
                            PICKL9 DB 10,13,'  **  9.JHILMIL ABASIK AREA (HOUSE NO 44,ROAD NO 6/B)             60/-    **$' <br />


                            <br /><br /><br />



                            ;PICKUP VAN ( SHIFER ) ITEM <br /><br />

                            PICKS1 DB 10,13,'  **  1.MIRPUR 10 (NEAR MODEL THANA)                               8/-     **$' <br />
                            PICKS2 DB 10,13,'  **  2.SHABAG (NEAR DHAKA UNIVERSITY)                            80/-     **$' <br />
                            PICKS3 DB 10,13,'  **  3.MIDDLE BADDA (HOUSE NO 60/A)                               5/-     **$'<br />
                            PICKS4 DB 10,13,'  **  4.PANTHAPOTH (NEAR BASUNDHARA SHOPPING COMPLEX)              5/-     **$'<br />
                            <br /><br /><br />




                            ;MICRO (LARGE) ITEM <br /><br />
                            MICROB1 DB 10,13,'  **  1.TEGAON SHILPO NOGORI AREA                                50/-     **$' <br />
                            MICROB2 DB 10,13,'  **  2.HAZARIBAGH                                               50/-     **$'<br />
                            MICROB3 DB 10,13,'  **  3KAMALAPUR (NEAR RAIL STATION)                             50/-     **$'<br />
                            MICROB4 DB 10,13,'  **  4.KAMRANGIRCHAR AREA                                       50/-     **$'<br />



                            ;MICRO (SMALL) ITEM <br /><br />
                            MICROS1 DB 10,13,'  **  1.WARI(HOUSE NO 22,ROAD NO 6)                               8/-     **$' <br />
                            MICROS2 DB 10,13,'  **  2.DEMRA AREA                                                6/-     **$' <br />
                            MICROS3 DB 10,13,'  **  3.MIRPUR 2 (BESIDE SHEREE BANGLA NATIONAL CRICKET STADIUM)  9/-     **$' <br />
                            MICROS4 DB 10,13,'  **  4.ASHULA SHILPO AREA                                        9/-     **$'<br />
                            MICROS5 DB 10,13,'  **  5.JHIMIL (BESIDE PART ROAD,HOUSE NO 20/2)                   7/-     **$' <br />
                            MICROS6 DB 10,13,'  **  6.HASNABAD AREA                                             4/-     **$'<br />

                            <br /><br /><br />


                            ;INVALID <br /> <br />
                            MSG5 DB 10,13,10,13,'      ***   INVALID ENTRY   ***$' <br />
                            MSG6 DB 10,13,'      ***   TRY AGAIN    ***$' <br />

                            <br /> <br />


                            MSG7 DB 10,13,10,13,'ENTER YOUR CHOICE : $' <br />
                            MSG8 DB 10,13,10,13,' HOW MANY TIMES DO YOU PARKING YOUR VEHICLE ( IN HOUR ) :$' <br />
                            MSG9 DB 10,13,10,13,' TOTAL PRICE: $' <br />
                            <br /><br />


                            <br /><br />
                            MSG10 DB 10,13,10,13,'1.GO BACK TO MAIN MENU$'
                            MSG11 DB 10,13,'2.EXIT$'
                            <br /><br />

                        </div>
                    </div>
                </div>
                <div className="section">
                    <h4 className="my-3 text-center">Bike section</h4>
                    <div className="scroll-box">
                        <div className="text">
                            <br />
                            MOV AH,2                ;NEWLINE <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13 <br />
                            INT 21H <br />


                            <br /><br />
                            MOV AH,2                ;NEWLINE <br />
                            MOV DL,10 <br />
                            INT 21H<br />
                            MOV DL,13 <br />
                            INT 21H <br />


                            .CODE <br />
                            MAIN PROC <br />
                            MOV AX,@DATA <br />
                            MOV DS,AX <br />

                            FIRST:<br />

                            LEA DX,MSG1             ;PRINT " WELCOME TO VEHICLE PLACING MANAGEMENT SYSTEM " <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            MOV AH,2                ;NEWLINE <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13  <br />
                            INT 21H <br />


                            LEA DX,MSG3             ;PRINT "WHAT TYPE OF VEHICLE SHOULD YOU PARKING(ENTER YOUR CHOSE)" <br />
                            MOV AH,9 <br />
                            INT 21H <br />




                            LEA DX,C1               ;DISPLAY 1ST CHOICE <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            LEA DX,C2               ;DISPLAY 2ND CHOICE <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            LEA DX,C3               ;DISPLAY 3RD CHOICE <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            LEA DX,C4               ;DISPLAY 4TH CHOICE <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            LEA DX,C5               ;DISPLAY 5TH CHOICE <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            LEA DX,C6               ;DISPLAY 6TH CHOICE <br />
                            MOV AH,9 <br />
                            INT 21H <br />


                            MOV AH,2                ;NEWLINE <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13 <br />
                            INT 21H <br />




                            LEA DX,MSG2                ;DISPLAY "ENTER CHOICE :" <br />
                            MOV AH,9 <br />
                            INT 21H <br />


                            ;CALCULATION <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            MOV BH,AL <br />
                            SUB BH,48 <br />

                            CMP BH,1 <br />
                            JE BIKE <br />
                            <br />
                            CMP BH,2 <br />
                            JE PICKUPVANM <br />
                            <br />
                            CMP BH,3 <br />
                            JE PICKUPVANL <br />

                            <br />
                            CMP BH,4 <br />
                            JE PICKUPVANS <br />
                            <br />

                            CMP BH,5<br />
                            JE MICROL<br />

                            CMP BH,6<br />
                            JE MICROS<br />

                            <br />
                            JMP INVALID<br />



                            <br />
                            BIKE:
                            <br />
                            ; BIKE STARTS<br />

                            LEA DX,MSG4             ;DISPLAY"CHOISE YOUR PLACE FROM THE MENU;" <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            MOV AH,2                ;NEWLINE <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13 <br />
                            INT 21H <br />


                            <br /><br /><br />

                            LEA DX,BIKE1            ;BIKE PLACE 1 <br />
                            MOV AH,9 <br />
                            INT 21H <br />


                            LEA DX,BIKE2            ;BIKE PLACE 2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            LEA DX,BIKE3            ;BIKE PLACE 3 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /> <br />
                            LEA DX,BIKE4            ;BIKE PLACE 4 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /><br />
                            LEA DX,BIKE5            ;BIKE PLACE 5 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /><br />

                            LEA DX,BIKE6            ;BIKE PLACE 6 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /><br />
                            LEA DX,BIKE7            ;BIKE PLACE 7 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /><br />
                            LEA DX,BIKE8            ;BIKE PLACE 8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,BIKE9            ;BIKE PLACE 9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /><br /><br />

                            LEA DX,MSG7             ;PRINT "ENTER YOUR CHOICE:" <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br />
                            MOV AH,1 <br />
                            INT 21H                 ;CALCULATION <br />
                            MOV BL,AL <br />
                            SUB BL,48 <br />

                            <br /><br />

                            CMP BL,1                ;BIKE PRICE FOR 1ST PALCE <br />
                            JE THIRTY <br />

                            CMP BL,2                ;BIKE PRICE FOR 2ND PALCE <br />
                            JE FOURTY <br />

                            CMP BL,3                ;BIKE PRICE FOR 3RD PALCE <br />
                            JE SIXTY <br />

                            CMP BL,4                ;BIKE PRICE FOR 4TH PALCE <br />
                            JE TWENTY <br />

                            CMP BL,5                ;BIKE PRICE FOR 5TH PALCE <br />
                            JE TWENTY <br />

                            CMP BL,6                ;BIKE PRICE FOR 6TH PALCE <br />
                            JE SEVENTY <br />

                            CMP BL,7                ;BIKE PRICE FOR 7TH PALCE <br />
                            JE EIGHTY <br />

                            CMP BL,8                ;BIKE PRICE FOR 8TH PALCE <br />
                            JE SEVENTY <br />

                            CMP BL,9                ;BIKE PRICE FOR 9TH PALCE <br />
                            JE FIFTY <br />

                            <br /><br /><br />

                            JMP INVALID <br />


                            THIRTY:                  ;PRICE FOR 30 <br />

                            MOV BL,3                 ;DISPLAY "HOW MANY TIMES DO YOU PARKING YOUR VEHICLE ( IN HOUR )" <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /><br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />
                            <br /><br />


                            MUL BL                    ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL
                            AAM <br /><br />

                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />
                            <br />
                            ;DISPLAY "TOTAL PRICE:" <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H<br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H<br />

                            <br /><br />
                            MOV DL,CL <br />
                            INT 21H <br />

                            MOV DL,'0' <br />
                            INT 21H<br />


                            MOV DL,47                  ;FOR /- PRINT <br />
                            INT 21H<br />
                            MOV DL,45<br />
                            INT 21H<br />
                            <br /><br />


                            LEA DX,MSG10               ;GO BACK TO MAIN MENU <br />
                            MOV AH,9<br />
                            INT 21H  <br />

                            LEA DX,MSG11               ;DISPLAY "EXIT" <br />
                            MOV AH,9<br />
                            INT 21H<br />

                            LEA DX,MSG2                ; PRINT "ENTER CHOICE" <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /><br />

                            CMP AL,1 <br />
                            JE FIRST <br />

                            JMP EXIT <br />
                            <br /><br />

                            FOURTY:                  ;PRICE FOR 40 <br />
                            MOV BL,4 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br />
                            <br />

                            MOV AH,1  <br />
                            MOV AH,1   <br />
                            INT 21H  <br />
                            SUB AL,48  <br />



                            MUL BL                  ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL  <br />
                            AAM  <br />
                            ;FOR CORRECT RESULT  <br />
                            MOV CX,AX  <br />
                            ADD CH,48  <br />
                            ADD CL,48  <br />


                            LEA DX,MSG9             ;PRINT "TOTAL PRICE"  <br />
                            MOV AH,9  <br />
                            INT 21H  <br />
                            <br />
                            MOV AH,2  <br />
                            MOV DL,CH  <br />
                            INT 21H  <br />

                            <br />
                            MOV DL,CL  <br />
                            INT 21H  <br />

                            MOV DL,'0'              ;INITIAL VALUE 0  <br />
                            INT 21H  <br />

                            <br /> <br />
                            MOV DL,47               ;FOR /- PRINT  <br />
                            INT 21H  <br />
                            MOV DL,45  <br />
                            INT 21H <br />

                            <br />  <br />

                            LEA DX,MSG10            ;PRINT "GO BACK TO MAIN MENU " <br />
                            MOV AH,9  <br />
                            INT 21H  <br />
                            <br />
                            LEA DX,MSG11            ;PRINT EXIT  <br />
                            MOV AH,9  <br />
                            INT 21H  <br />
                            <br />
                            LEA DX,MSG7             ;PRINT CHOSE OPTION  <br />
                            MOV AH,9  <br />
                            INT 21H  <br />

                            MOV AH,1                ;MAIN MENU  <br />
                            INT 21H  <br />
                            SUB AL,48  <br />

                            <br /> <br />

                            CMP AL,1  <br />
                            JE FIRST  <br />

                            JMP EXIT                ;JUMP EXIT  <br />

                            FIFTY:                  ;PRICE FOR 50  <br />


                            MOV BL,4                ;PRINT "HOW MANY TIMES DO YOU PARKING YOUR VEHICLE ( IN HOUR ) "  <br />
                            LEA DX,MSG8  <br />
                            MOV AH,9  <br />
                            INT 21H  <br />


                            <br /> <br />
                            MOV AH,1  <br />
                            INT 21H  <br />
                            SUB AL,48  <br />



                            MUL BL  <br />
                            AAM                     ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL  <br />

                            MOV CX,AX               ;FOR VALUABLE TESULT  <br />
                            ADD CH,48  <br />
                            ADD CL,48  <br />

                            <br /> <br />
                            LEA DX,MSG9              ;PRINT "TOTAL PRICE"  <br />
                            MOV AH,9  <br />
                            INT 21H <br />

                            MOV AH,2  <br />
                            MOV DL,CH  <br />
                            INT 21H  <br />

                            <br /> <br />
                            MOV DL,CL  <br />
                            INT 21H  <br />

                            MOV DL,'0'              ;INITIAL 0  <br />
                            INT 21H  <br />

                            <br /> <br />

                            MOV DL,47               ;FOR /- PRINT  <br />
                            INT 21H  <br />
                            MOV DL,45  <br />
                            INT 21H  <br />


                            <br /> <br />

                            LEA DX,MSG10             ;GO BACK TO MAIN MENU  <br />
                            MOV AH,9  <br />
                            INT 21H  <br />
                            <br />
                            LEA DX,MSG11  <br />
                            MOV AH,9  <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48               ;MAIN  MENU <br />

                            <br /><br />

                            CMP AL,1<br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />
                            <br /><br />


                            SEVENTY:                 ;PRICE FOR 70 <br />
                            MOV BL,7 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />


                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br />
                            MUL BL <br />
                            AAM                     ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br /><br />
                            LEA DX,MSG9 <br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH<br />
                            INT 21H<br />

                            <br /><br />
                            MOV DL,CL <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H<br />
                            <br /><br />



                            MOV DL,47                  ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />

                            <br /><br />

                            LEA DX,MSG10                ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2<br />
                            MOV AH,9 <br />
                            INT 21H                    ;MAIN MENU <br />
                            <br />
                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />

                            <br /><br />

                            CMP AL,1 <br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />
                            <br />
                            EIGHTY:                    ;PRICE FOR 80 <br />
                            MOV BL,8 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H<br />
                            <br /><br />


                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />
                            <br /><br />


                            MUL BL                     ;MULTIPLICATION <br />
                            AAM                        ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2<br />
                            MOV DL,CH<br />
                            INT 21H<br />

                            <br />
                            MOV DL,CL<br />
                            INT 21H  <br />
                            <br />
                            MOV DL,'0'<br />
                            INT 21H <br />


                            MOV DL,47                    ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />
                            LEA DX,MSG10                 ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2                  ;MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            CMP AL,1 <br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />
                            <br />
                            JMP EXIT <br />



                            <br /> <br />

                        </div>
                    </div>
                </div>
                <div className="section">
                    <h4 className="my-3 text-center">Pickup van medium section</h4>
                    <div className="scroll-box">
                        <div className="text">
                            PICKUPVANM: <br />
                            <br />
                            LEA DX,MSG4                   ;PICKUP VAN M START <br />
                            MOV AH,9 <br />
                            INT 21H <br />


                            <br /> <br />
                            MOV AH,2                    ;NEWLINE <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13 <br />
                            INT 21H <br />

                            <br /> <br />



                            LEA DX,PICKM1               ;PLACE 1 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM2               ;PLACE 2 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM3               ;PLACE 3 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM4               ;PLACE 4 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM5               ;PLACE 5 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />
                            LEA DX,PICKM6               ;PLACE 6 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM7               ;PLACE 7 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM8               ;PLACE 8 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKM9               ;PLACE 9 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT  <br />


                            <br /> <br />


                            LEA DX, <br />
                            MOV AH,9 <br />
                            INT  <br />
                            <br /> <br />

                            MOV AH,1                    ;FOR VALUABLE RESULT <br />
                            INT 21H <br />
                            MOV BL,AL <br />
                            SUB BL,48 <br />
                            <br />
                            CMP BL,1                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 1 <br />
                            JE SIXTY <br />
                            <br />
                            CMP BL,2                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 2 <br />
                            JE EIGHTY <br />
                            <br />
                            CMP BL,3                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 3 <br />
                            JE THIRTY <br />
                            <br />
                            CMP BL,4                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 4 <br />
                            JE NINETY <br />
                            <br />
                            CMP BL,5                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 5 <br />
                            JE TWENTY <br />

                            CMP BL,6                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 6 <br />
                            JE FOURTY
                            <br />
                            CMP BL,7                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 7 <br />
                            JE THIRTY
                            <br />
                            CMP BL,8                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 8 <br />
                            JE THIRTY <br />
                            <br />
                            CMP BL,9                    ;PICKUP VAN ( MEDIUM ) PRICE FOR PLACE 9 <br />
                            JE  <br />

                            <br /> <br />
                            JMP INVALID <br />
                            <br />
                            TEN:                        ; FOR 10 CALCULATION <br />
                            MOV BL,1 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />


                            <br /> <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            MUL BL                      ;MULTIPLICATION <br />
                            AAM                         ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br />

                            MOV CX, <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br /> <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br /> <br />
                            MOV DL,CL
                            INT 21H <br />
                            <br />
                            MOV DL,'0'
                            INT  <br />

                            <br /> <br />
                            MOV DL,47                  ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />

                            <br /> <br />

                            LEA DX,MSG10                 ;GO BACK TO MAIN MENU
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br />

                            CMP AL,1
                            JE FIRST <br />

                            JMP EXIT <br />



                            <br /> <br />
                            TWENTY:                    ;PRICE FOR 20

                            MOV BL,2 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /> <br />


                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            MUL BL <br />
                            AAM                        ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br /> <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />
                            <br />

                            MOV DL,CL <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H <br />
                            <br /> <br />

                            MOV DL,47                   ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />

                            <br />
                            LEA DX,MSG10                ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11v
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            CMP AL,1 <br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />
                            <br /> <br />


                            SIXTY:                        ;PRICE FOR 60 <br />

                            MOV BL,6 <br />
                            <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            MUL BL <br />
                            AAM                       ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />

                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H <br />
                            <br /> <br />

                            MOV DL,47                 ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />
                            LEA DX,MSG10               ;GO BACK TO MAIN MENU
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H                    ;MAIN MENU <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            CMP AL,1 <br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />
                            <br /> <br />

                            NINETY:                   ;PRICE FOR 90
                            MOV BL,9 <br />

                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br />
                            MUL BL <br />
                            AAM                      ; DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />


                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br />
                            MOV DL,CL <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H <br />
                            <br />

                            MOV DL,47                ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG10             ;GO BACK MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11  <br />
                            MOV AH,9 <br />
                            INT  <br />
                            <br />
                            LEA DX, <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1
                            INT  <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            CMP AL, <br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />





                            <br /> <br /> <br />

                        </div>
                    </div>
                </div>
                <div className="section">
                    <h4 className="my-3 text-center">Pickup van large Section</h4>
                    <div className="scroll-box">
                        <div className="text">
                            PICKUPVANL: <br />
                            LEA DX,MSG4 <br />
                            MOV AH,9                 ;PICKUP VAN LARGE STARTS <br />
                            INT 21H <br />

                            MOV AH,2 <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13 <br />
                            INT 21H <br />




                            <br /> <br />

                            LEA DX,PICKL1            ;PLACE 1 FOR PICKUP VAN ( LARGE ) <br />
                            MOV AH,9 <br />
                            INT  <br />
                            <br />
                            LEA DX,PICKL2 <br />
                            MOV AH,9                 ;PLACE 2 FOR PICKUP VAN ( MEDIUM ) <br />
                            INT 21H <br />
                            <br />
                            <br />
                            LEA DX,PICKL3            ;PLACE 3 FOR PICKUP VAN ( MEDIUM ) <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKL4            ;PLACE 4 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /> <br />

                            LEA DX,PICKL5            ;PLACE 5 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />
                            LEA DX,PICKL6            ;PLACE 6 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />
                            LEA DX,PICKL7            ;PLACE 7 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />
                            LEA DX,PICKL8            ;PLACE 8 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKL9            ;PLACE 9 FOR PICKUP VAN ( MEDIUM ) <br />
                            MOV AH,9 <br />
                            INT 21H <br />




                            <br /> <br />


                            LEA DX,MSG7 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /> <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            MOV BL,AL <br />
                            SUB BL,48 <br />
                            <br />
                            CMP BL,1                  ;PICKUP VAN (LARGE) PRICE FOR 1ST PLACE <br />
                            JE SIXTY <br />

                            CMP BL,2                  ;PICKUP VAN (LARGE) PRICE FOR 2ND PLACE <br />
                            JE EIGHTY

                            CMP BL,3                  ;PICKUP VAN (LARGE) PRICE FOR 3RD PLACE <br />
                            JE EIGHTY <br />

                            CMP BL,4                  ;PICKUP VAN (LARGE) PRICE FOR 4TH PLACE <br />
                            JE FOURTY

                            CMP BL,5                  ;PICKUP VAN (LARGE) PRICE FOR 5TH PLACE <br />
                            JE FIFTY <br />

                            CMP BL,6                  ;PICKUP VAN (LARGE) PRICE FOR 6TH PLACE <br />
                            JE SEVENTY <br />

                            CMP BL,7                  ;PICKUP VAN (LARGE) PRICE FOR 7TH PLACE <br />
                            JE SIXTY <br />

                            CMP BL,8                  ;PICKUP VAN (LARGE) PRICE FOR 8TH PLACE <br />
                            JE SIXTY <br />

                            CMP BL,9                  ;PICKUP VAN (LARGE) PRICE FOR 9TH PLACE <br />
                            JE SIXTY <br />

                            FOURTY1: <br />
                            MOV BL,4 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br />

                            MUL BL <br />
                            AAM                      ; DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br />

                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br /> <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH, <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br />
                            MOV DL,CL <br />
                            INT 21H<br />
                            MOV DL,'0' <br />
                            INT 21H <br />
                            <br />
                            <br />
                            MOV DL,47              ;FOR /- PRINT <br />
                            INT 21Hv
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />
                            LEA DX,MSG10             ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H                 ;MAIN MENU <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            CMP AL,1 <br />
                            JE FIRST <br />
                            <br /> <br />
                            JMP EXIT <br />

                            <br /> <br />

                            FIFTY1: <br />
                            MOV BL,4 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br /> <br />
                            MUL BL <br />
                            AAM                       ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />

                            <br /> <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />
                            <br /> <br />

                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /> <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />
                            <br /> <br />

                            MOV DL,CL <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H <br />


                            <br /> <br />
                            MOV DL,47            ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />

                            LEA DX,MSG10           ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48            ;MAIN  MENUv <br />


                            <br /> <br />
                            CMP AL,1 <br />
                            JE FIRST <br />

                            JMP  <br />






                            <br /> <br />


                            SIXTY1: <br />
                            <br />
                            MOV BL,6 <br />
                            <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br /> <br />
                            MUL BL             ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            AAM <br />
                            <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br />
                            MOV DL,CL <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H <br />

                            <br /> <br />
                            MOV DL,47             ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />
                            LEA DX,MSG10          ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H               ;MAIN MENU <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br /> <br />
                            CMP AL,1 <br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT <br />


                            <br /> <br />

                            SEVENTY1: <br />
                            MOV BL,7 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br /> <br />
                            MUL BL <br />
                            AAM                  <br />  ; DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />
                            <br />

                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br />
                            MOV DL,CL <br />
                            INT 21H <br />

                            MOV DL,'0' <br />
                            INT 21H <br />


                            <br /> <br />
                            MOV DL,47                ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />
                            LEA DX,MSG10             ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H     <br />               ;MAIN MENU
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />


                            <br /> <br />
                            CMP AL,1 <br />
                            JE FIRST <br />

                            JMP EXIT <br />

                            <br />
                            EIGHTY1: <br />
                            MOV BL,8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />

                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />
                            <br /> <br />


                            MUL BL <br />
                            AAM                     ;   DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />

                            <br />
                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br /> <br />
                            LEA DX,MSG9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br /> <br />


                            MOV DL,CL <br />
                            INT 21H <br />
                            <br />
                            MOV DL,'0' <br />
                            INT 21H <br />
                            <br /> <br />

                            MOV DL,47                   ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />


                            <br /> <br />
                            LEA DX,MSG10                 ;GO BACK TO MAIN MENU <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2                  ;MAIN MENU <br /> <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />

                            CMP AL,1 <br />
                            JE FIRST <br />

                            JMP EXIT <br />



                            <br /> <br />

                        </div>
                    </div>
                </div>
                <div className="section">
                    <h4 className="my-3 text-center">Pickup van Shifter</h4>
                    <div className="scroll-box">
                        <div className="text">
                            PICKUPVANS: <br />
                            LEA DX,MSG4 <br />
                            MOV AH,9                     ;PICKUP VAN ( SHIFTER ) STARTS <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,10 <br />
                            INT 21H <br />
                            MOV DL,13 <br />
                            INT 21H <br />



                            <br /> <br />

                            LEA DX,PICKS1               ;PICKUP VAN ( SHIFER ) FOR PLACE 1 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKS2               ;PICKUP VAN ( SHIFER ) FOR PLACE 2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKS3               ;PICKUP VAN ( SHIFER ) FOR PLACE 3 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,PICKS4               ;PICKUP VAN ( SHIFER ) FOR PLACE 4 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />

                            LEA DX,MSG7 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            MOV BL,AL <br />
                            SUB BL,48 <br />
                            <br />
                            CMP BL,1 <br />
                            JE LABEL1 <br />
                            <br />
                            CMP BL,2 <br />
                            JE LAB <br />EL2

                            CMP BL,3 <br />
                            JE LABEL3 <br />
                            <br /> <br />
                            CMP BL,4 <br />
                            JE LABEL3 <br />
                            <br /> <br />
                            JMP INVALID <br />
                            <br /> <br />

                            LABEL1: <br />
                            MOV BL,8 <br />
                            JMP LABEL4 <br />

                            LABEL2: <br />
                            MOV BL,8 <br />
                            LEA DX,MSG8 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br /> <br />


                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br /> <br />
                            <br />
                            MUL BL
                            AAM       <br />                ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL <br />
                            <br /> <br />

                            MOV CX,AX <br />
                            ADD CH,48 <br />
                            ADD CL,48 <br />

                            <br /> <br />
                            LEA DX,MS <br />G9 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,2 <br />
                            MOV DL,CH <br />
                            INT 21H <br />

                            <br />
                            MOV DL,CL <br />
                            INT 21H <br />

                            MOV DL,'0' <br />
                            INT 21H <br />
                            <br /> <br />

                            MOV DL,47                   ;FOR /- PRINT <br />
                            INT 21H <br />
                            MOV DL,45 <br />
                            INT 21H <br />
                            <br />
                            <br />

                            LEA DX,MSG10                ;GO BACK TO MAIN MENU <br />
                            MOV AH,9
                            INT 21H <br />
                            <br />
                            LEA DX,MSG11 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            LEA DX,MSG2 <br />
                            MOV AH,9 <br />
                            INT 21H <br />
                            <br />
                            MOV AH,1 <br />
                            INT 21H <br />
                            SUB AL,48 <br />

                            <br />
                            <br />
                            CMP AL,1 <br />
                            JE FIRST <br />
                            SUB AL,48 <br />
                            SUB AL,48 <br />
                            <br />

                            <br />
                            LABEL3:<br />
                            MOV BL,5<br />
                            JMP LABEL4<br />


                            LABEL4:<br />
                            LEA DX,MSG8<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />

                            <br /><br />

                            MUL BL<br />
                            AAM                       ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL<br />
                            <br />
                            <br />
                            MOV CX,AX
                            ADD CH,48<br />
                            ADD CL,48<br />

                            <br />
                            LEA DX,MSG9<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            MOV AH,2<br />
                            MOV DL,CH<br />
                            INT 21H<br />

                            <br /><br />
                            MOV DL,CL<br />
                            INT 21H<br />
                            <br />

                            MOV DL,47                    ;FOR /- PRINT<br />
                            INT 21H<br />
                            MOV DL,45<br />
                            INT 21H<br />


                            <br /><br />


                            LEA DX,MSG10                 ;GO BACK TO MAIN MENU<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MSG11<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MSG2<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />

                            <br /><br />

                            CMP AL,1<br />
                            JE FIRST<br />


                            <br /><br />

                            JMP EXIT<br />


                            <br /><br />

                        </div>
                    </div>
                </div>
                <div className="section">
                    <h4 className="my-3 text-center">Micro (large) section</h4>
                    <div className="scroll-box">
                        <div className="text">
                            MICROL:<br />
                            <br />
                            LEA DX,MSG4<br />
                            MOV AH,9                        ;MICRO (LARGE)   STARTS<br />
                            INT 21H<br />

                            MOV AH,2<br />
                            MOV DL,10<br />
                            INT 21H<br />
                            MOV DL,13<br />
                            INT 21H<br />


                            <br /><br />

                            LEA DX,MICROB1                ;MICRO (LARGE) FOR PLACE 1<br />
                            MOV AH,9<br /><br />
                            INT 21H<br />
                            <br />
                            LEA DX,MICROB2                ;MICRO (LARGE) FOR PLACE 2<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MICROB3                ;MICRO (LARGE) FOR PLACE 3<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MICROB4                ;MICRO (LARGE) FOR PLACE 4<br />
                            MOV AH,9<br />
                            INT 21H<br />



                            <br /><br />

                            LEA DX,MSG7<br />
                            MOV AH,9<br />
                            INT 21H<br />

                            <br /><br />
                            MOV AH,1<br />
                            INT 21H<br />
                            MOV BL,AL<br />
                            SUB BL,48<br />

                            CMP BL,4<br />
                            JG <br />
                            <br />
                            LEA DX,MSG8<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            XOR BL,BL<br />
                            MOV BL,5<br />

                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />



                            MUL BL<br />
                            AAM                        ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL<br />

                            <br />
                            MOV CX,AX<br />
                            ADD CH,48<br />
                            ADD CL,48<br />

                            <br />
                            LEA DX,MSG9<br />
                            MOV AH,9<br />
                            INT 21H<br />

                            MOV AH,2<br />
                            MOV DL,CH<br />
                            INT 21H<br />
                            <br /><br />

                            MOV DL,CL<br />
                            INT 21H<br />

                            MOV DL,'0'<br />
                            INT 21H<br />
                            <br />

                            MOV DL,47                    ;FOR /- PRINT<br />
                            INT 21H<br />
                            MOV DL,45<br />
                            INT 21H<br />


                            <br />
                            LEA DX,MSG10                 ;GO BACK TO MAIN MENU<br />
                            MOV AH,<br />
                            INT 21H<br />
                            <br />
                            LEA DX,<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MSG2<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />


                            <br /><br />
                            CMP AL,1<br />
                            JE FIRST<br />

                            <br />


                            <br />
                            JMP EXIT<br />
                            <br /><br />

                        </div>
                    </div>
                </div>
                <div className="section">
                    <h4 className="my-3 text-center">Micro (mini) section</h4>
                    <div className="scroll-box">
                        <div className="text">
                            MICROS:<br />
                            LEA DX,MSG4<br />
                            MOV AH,9                      ;MICRO (SMALL) STARTS<br />
                            INT 21H<br />
                            <br />
                            MOV AH,2<br />
                            MOV DL,10<br />
                            INT 21H<br />
                            MOV DL,13<br />
                            INT 21H<br /><br />


                            <br /><br />
                            LEA DX,MICROS1               ;MICRO (SMALL) FOR PLACE 1<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MICROS2               ;MICRO (SMALL) FOR PLACE 2<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MICROS3               ;MICRO (SMALL) FOR PLACE 3<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />

                            LEA DX,MICROS4               ;MICRO (SMALL) FOR PLACE 4<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MICROS5               ;MICRO (SMALL) FOR PLACE 5<br />
                            MOV AH,9<br />
                            INT 21H<br /><br />

                            LEA DX,MICROS6               ;MICRO (SMALL) FOR PLACE 6<br />
                            MOV AH,9<br />
                            INT 21H<br />

                            <br />
                            LEA DX,MSG7<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />

                            MOV AH,1<br />
                            INT 21H<br />
                            MOV BL,AL<br />
                            SUB BL,48<br />
                            <br />
                            CMP BL,1<br />
                            JE WARI<br />

                            CMP BL,2<br />
                            JE DEMRA<br />
                            <br />
                            CMP BL,3<br />
                            JE MIRPUR<br />
                            <br />
                            CMP BL,4<br />
                            JE ASULIA<br />
                            <br />
                            CMP BL,5<br />
                            JE JHIMIL<br />
                            <br />
                            CMP BL,6<br />
                            JE HASNABAD<br />
                            <br />
                            JMP INVALID<br />
                            <br />
                            WARI:<br />
                            MOV BL,8<br />
                            JMP MIC<br />
                            <br />
                            DEMRA:<br />
                            MOV BL,6<br />
                            JMP MIC<br />
                            <br /><br />

                            MIRPUR:<br />
                            MOV BL,9<br />
                            JMP MIC<br />

                            ASULIA:<br />
                            MOV BL,9<br />
                            JMP MIC<br />
                            <br />

                            JHIMIL:<br />
                            MOV BL,7<br />
                            JMP MIC<br />

                            <br />
                            HASNABAD:<br />
                            MOV BL,4<br />
                            JMP MIC<br />
                            <br /><br />



                            MIC:<br />
                            LEA DX,MSG8<br />
                            MOV AH,9<br />
                            INT 21H<br />

                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />

                            MUL BL<br />
                            AAM                       ;DECIMAL MULTIPLICATION ADJUSTMENT, THE HIGH DIGIT OF THE PRODUCT IS IN AH, THE LOW DIGIT IS IN AL<br />

                            MOV CX,AX<br />
                            ADD CH,48<br />
                            ADD CL,48<br />

                            <br />
                            LEA DX,MSG9<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            MOV AH,2<br />
                            MOV DL,CH<br />
                            INT 21H<br />

                            <br />
                            MOV DL,CL<br />
                            INT 21H<br />

                            <br /><br />
                            MOV DL,47<br />
                            INT 21H<br />
                            MOV DL,45<br />
                            INT 21H<br />

                            <br /><br />

                            LEA DX,MSG10                ;GO BACK TO MAIN MENU<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MSG11<br />
                            MOV AH,9<br />
                            INT 21H<br />
                            <br />
                            LEA DX,MSG2<br />
                            MOV AH,9 <br />
                            INT 21H<br />
                            <br /><br />
                            MOV AH,1<br />
                            INT 21H<br />
                            SUB AL,48<br />

                            <br />

                            CMP AL,1<br />
                            JE FIRST <br />
                            <br />
                            JMP EXIT: <br />
                            <br />

                            INVALID: <br />
                            <br />
                            LEA DX,MSG5 <br />
                            MOV AH,9 <br />
                            INT 21H <br />

                            <br /> <br />
                            LEA DX,MSG6<br />
                            MOV AH,9<br />
                            INT 21H <br />

                            <br /><br />

                            JMP EXIT<br />



                            <br /><br />
                            EXIT:<br />
                            <br />
                            MOV AH,4CH<br />
                            INT 21H<br />
                            MAIN ENDP <br />
                            END MAIN <br />

                        </div>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default CodeSection;