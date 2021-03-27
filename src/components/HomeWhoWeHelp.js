import React, { Component } from 'react'
import '../scss/component-scss/WhoWeHelp.scss'
// import { auth, db } from "./Firebase/firebase2";
import firebase from './Firebase/firebase';
import { withFirebase } from './Firebase';



class  HomeWhoWeHelpBase extends Component {

    // const [obj, setObj] = useState({});
    

    // useEffect(() => {
    //     const foundationRef = db.ref("fundacja").on("value", snapshot => {
    //         let allNotes = [];
    //         snapshot.forEach(snap => {
    //           allNotes.push(snap.val());
    //         });
    //         this.setState({ fundacje: allNotes });
    //     });
        
    // }, [])


    // return (
    //     <section className="who-we-help-container">
    //         <div className="wrapper">
    //             <h1>Komu pomagamy</h1>
    //             <div className="button-container">
    //                 <div className="button fundacje">Fundacje</div>
    //                 <div className="button organizacje">Organizacje</div>
    //                 <div className="button lokalne">Lokalne zbiórki</div>
    //             </div>
                
    //             <p className="description">W naszej bazie znajdziesz liste zweryfikowanych instyticji, z którymi współpracujemy. Mozesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</p>
    //             <div className="list">
    //                 <ul>

    //                 </ul>
    //             </div>
                


    //         </div>
            
    //     </section>
    // )


    constructor(props) {
        super(props);
     
        this.state = {
            loading: false,
          foundations: [],
        };

        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;

        this.setOrganisations = this.setOrganisations.bind(this);
        this.setFoundations = this.setFoundations.bind(this);
        this.setLocals = this.setLocals.bind(this);
        
      }
     
      componentDidMount() {
        document.querySelector(".organizacje").focus();
        this.setOrganisations();
        console.log(this.foundations);
        console.log("WOEKIFN");
        window.scrollTo(0, 0)
        
      }

      setFocusToTextBox(){
        document.getElementById("mytext").focus();
    }

      setOrganisations() {   
       console.log("JEstem w funkcji")
        this.props.firebase.organizacje().on('value', snapshot => {
          console.log("JEstem w funkcji 2")
            const organisationObject = snapshot.val();
       console.log("Object " + organisationObject);
            if (organisationObject) {
              const organisationsList = Object.keys(organisationObject).map(key => ({
                  ...organisationObject[key],
                  uid: key,
                }));
       
              this.setState({ foundations: organisationsList, loading: false });
              console.log("Work");
            } else {
              this.setState({ foundations: null, loading: false });
              console.log("EINWINDWIDNI")
            }
          });

     
          console.log("PO")
        }

        setFoundations() {
            this.props.firebase.fundacje().on('value', snapshot => {
                const organisationObject = snapshot.val();
           
                if (organisationObject) {
                  const organisationsList = Object.keys(organisationObject).map(key => ({
                      ...organisationObject[key],
                      uid: key,
                    }));
           
                  this.setState({ foundations: organisationsList, loading: false });
                  console.log("Work");
                } else {
                  this.setState({ foundations: null, loading: false });
                }
              });
            }

            setLocals(e) {

             
                this.props.firebase.lokalne().on('value', snapshot => {
                    const localsObject = snapshot.val();
               
                    if (localsObject) {
                      const localsList = Object.keys(localsObject).map(key => ({
                          ...localsObject[key],
                          uid: key,
                        }));
               
                      this.setState({ foundations: localsList, loading: false });
                      console.log("Work");
                    } else {
                      this.setState({ foundations: null, loading: false });
                    }
                  });
                }
     

     
      render() {
        const { foundations, loading } = this.state;
        console.log(foundations);
        return (
           
        <section className="who-we-help-container">
            <div className="wrapper">
                <h1>Komu pomagamy</h1>
                <div className="button-container">
                    <div tabindex="0" value="organizacja" onClick={this.setOrganisations} className="button organizacje">Organizacje pozarządowe</div>
                    <div tabindex="1" value="fundacje" onClick={this.setFoundations} className="button fundacje">Fundacje</div>
                    <div tabindex="2" value="lokalne" onClick={this.setLocals} className="button lokalne">Lokalne zbiórki</div>
                </div>
                
                <p className="description">W naszej bazie znajdziesz liste zweryfikowanych instyticji, z którymi współpracujemy. Mozesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</p>
                <div className="list">
                {foundations.map((foundation, key) => {
                return <div className="firebase-object-container" key={key}>
                            <div className="nazwa-misja-container">
                                <div className="nazwa">{foundation.nazwa}</div>
                                <div className="misja">{foundation.cel_misja}</div>
                            </div>
                            <div className="object-array-wrapper">
                                <div className="object-array">{foundation.co_dajemy.map((el,index) => {
                                    return <p key ={index}>{`${el} `}</p>
                                })}</div>
                               
                            </div>
                    </div>
            })}
          
                </div>
                


            </div>
            
        </section>
  
            
     
           
        );
      }
}

const HomeWhoWeHelp = withFirebase(HomeWhoWeHelpBase);
export default HomeWhoWeHelp;
