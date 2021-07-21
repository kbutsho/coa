import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import QuestionAnsCard from './QuestionAnsCard';
import Slider from './Slider';
import './Home.css';

const Home = () => {

    // question ans data

    const QuestionAns = [
        {
            id: 1,
            que: "Question 1",
            ans: "Answer 1",
        },
        {
            id: 2,
            que: "Question 2",
            ans: "Answer 2",
        },
        {
            id: 3,
            que: "Question 3",
            ans: "Answer 3",
        }
    ]
    const [QAns, setQAns] = useState(QuestionAns);
    console.log(setQAns);



    return (
        <div>
            <Slider></Slider>
            <NavBar></NavBar>
            <div className="containe">
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
                        <h1 className="text-center">Welcome to our Project</h1>
                        <h3 className="text-center py-3">What is Assembly Language?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eius facere odio autem dolor, quia cumque quas consectetur necessitatibus nulla ipsam sit odit fugiat exercitationem error consequuntur beatae eveniet quam perspiciatis totam? Eius id nihil quas ex corrupti cupiditate sint esse. Dolor quo vitae consequuntur autem quisquam consequatur veniam? Voluptates repellat ea nostrum quaerat magnam exercitationem? Magnam, quod eaque! Nobis dolores delectus, totam deserunt voluptates minima quae dolorem eius repellat voluptate. Quisquam culpa odit, ipsam ad sequi voluptates vel officia deleniti cumque voluptatum harum illum molestias ut tenetur incidunt, quasi facere accusantium perferendis accusamus fugit? Ducimus officiis deleniti voluptas totam.</p>
                    </div>
                     {/* header title area end */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;