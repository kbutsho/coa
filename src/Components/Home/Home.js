import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import QuestionAnsCard from './QuestionAnsCard';
import Slider from './Slider';
import './Home.css'

const Home = () => {

    // question ans data

    const QuestionAns = [
        {
            id: 1,
            que: "Why should you learn assembly language?",
            ans: "Assembly language knowledge is still useful for programmers. It aids in gaining total control of the system and its resources. The programmer may create code to access registers and obtain the memory address of pointers and values by knowing assembly language. It primarily aids in speed optimization, which improves efficiency and performance. Understanding the processor and memory functions is aided by studying assembly language. If a programmer is developing a program that requires a compiler, the programmer should have a strong understanding of the processor. Understanding the operation of processors and memory is aided by assembly language. It's a cryptic, symbolic language.",
        },
        {
            id: 2,
            que: "Limitation of our project",
            ans: "In our project, we utilized assembly language to investigate the underlying workings, structure, and implementation of a computer system. It is a console-based project, therefore it is not user-friendly, but we strive to provide the user with an experience of an assembly-based program. As a result, we can conclude that it will not be able to provide high-level language-based application advantages but will be able to provide assembly language-based application flavor. ",
        },
        {
            id: 3,
            que: "What we use in our parking system",
            ans: "Using this method, a user may view the route's available parking. The user will then choose one, provide some information, and enter the time they wish to park their vehicle. Following that, the individual will be given a receipt and will be required to pay the fee. Finally, it will provide the user with a raw test of assembly language.",
        }
    ]
    const [QAns, setQAns] = useState(QuestionAns);
    console.log(setQAns);



    return (
        <div>
            <Slider></Slider>
            <NavBar></NavBar>
           
            <div>
                <div className="row">

                    {/* question answer area start */}
                    <div className="col-md-4 bg-info p-5">
                        {
                            QAns.map(QAns =><QuestionAnsCard QAns={QAns} key={QAns.id}></QuestionAnsCard>)
                        }
                    </div>
                    {/* question answer area end */}
                   

                    {/* header title area start */}
                    <div className="col-md-8 p-5 bg-danger text-white">
                  
                        <h1 className="text-center">VEHICLE PLACING MANAGEMENT SYSTEM</h1>
                        <h3 className="text-center py-5" >What is Assembly Language?</h3>
                        <p>Assembly Language is a low-level programming language. It helps in understanding the programming language to machine code. In computers, there is an assembler that helps in converting the assembly code into machine code executable. Assembly language is designed to understand the instruction and provide it to machine language for further processing. It mainly depends on the architecture of the system, whether it is the operating system or computer architecture.</p>
                    </div>
                     {/* header title area end */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;