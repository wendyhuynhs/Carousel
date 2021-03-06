import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/sizeChart.css';
import Measure from '../components/Measure.jsx';

// const app = document.getElementById('app');
// const modal = document.getElementById('modal');

// class SizeChart extends React.Component {
//   constructor() {
//     super();
//     // this.el = document.createElement('div');
//   }
//   // componentDidMount() {
//   //   modal.appendChild(this.el);
//   // }

//   // componentWillUnmount() {
//   //   modal.removeChild(this.el);
//   // }
//   render() {

//   }
// }

const SizeChart = props => (
  <div className={styles.sizeChartBody}>
    <h2 className={styles.sizeChartText}> SIZE CHART</h2>
    <div>
      <section>
        <header>
          <h2 className={styles.sizeChartText}>
            MEN'S AND WOMEN'S ADIDAS FOOTWEAR SIZING
          </h2>
          <h4 className={styles.sizeChartText}>FIND YOUR SIZE</h4>
          <span
            className={[styles.smallPrint, styles.smallPrintHover].join(' ')}
          >
            <a>Do you know how to measure?</a>
          </span>
        </header>
        <div className={styles.tableHorizontal}>
          <div className={styles.tableContainer}>
            <div className={styles.tableColumns}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span className={styles.columnText}>
                        Heel-toe measurement
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span className={styles.columnText}>US - Men's</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span className={styles.columnText}>US - Women's</span>
                    </td>
                  </tr>

                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span className={styles.columnText}>UK</span>
                    </td>
                  </tr>

                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span className={styles.columnText}>EU</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span className={styles.columnText}>JP</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Div for mesaurements */}
          <div className={styles.scrollColumns}>
            <table className={styles.adidasTable}>
              <thead />
              <tbody>
                <tr className={styles.trDesign}>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.7"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.9"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.0"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.2"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.4"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.5"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.7"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.8"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.0"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.2"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.4"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.5"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.7"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.9"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.0"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.2"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.3"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.5"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.7"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.9"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.0"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.2"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.4"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.7"</span>
                  </td>
                </tr>
                <tr className={styles.trDesign}>
                  <td colSpan="1">
                    <span className={styles.tableContent}>4</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>4.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>5.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>6</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>6.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>7</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>7.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>13</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>13.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>14</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>14.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>15</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>16</span>
                  </td>
                </tr>
                <tr className={styles.trDesign}>
                  <td colSpan="1">
                    <span className={styles.tableContent}>5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>5.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>6</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>6.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>7</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>7.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>13</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>13.5"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>14"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>14.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>15</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>15.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> -- </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> -- </span>
                  </td>
                </tr>
                <tr className={styles.trDesign}>
                  <td colSpan="1">
                    <span className={styles.tableContent}>3.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>4</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>4.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>5.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>6</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>6.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>7</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>7.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>9.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>10.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>11.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>12.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>13</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>13.5</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>14</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> 14.5 </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> 15 </span>
                  </td>
                </tr>
                <tr className={styles.trDesign}>
                  <td colSpan="1">
                    <span className={styles.tableContent}>36</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      36 <br /> 2/3{' '}
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      37 <br /> 1/3{' '}
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>38</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      30 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>38</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      38 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      39 <br /> 1/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>40</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      40 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      41 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>42</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      42 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      43 <br /> 1/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>44</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      44 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      45 <br /> 1/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      46 <br /> 2/3{' '}
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      47 <br /> 1/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      48 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>49</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      49 <br /> 2/3
                    </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> 50</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>
                      50 <br /> 2/3
                    </span>
                  </td>
                </tr>
                <tr className={styles.trDesign}>
                  <td colSpan="1">
                    <span className={styles.tableContent}>220</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>225</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>230</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> 235 </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> 240</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>245</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>250</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>255</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>260</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>265</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>270</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>275</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>280</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>285</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>290</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>295</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>300</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>305</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>310</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>315</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>15</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>320</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> 325 </span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}> -- </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className={styles.scrollHorizontalText}>
          Scroll horizontally to see more
        </span>
      </section>
      <section>
        <Measure />
      </section>
    </div>
  </div>
);

export default SizeChart;

///create portal

// return ReactDOM.createPortal(
//   <div className={styles.sizeChartBody} ref="content">
//     <h5> Size Chart</h5>
//     <div>
//       <section>
//         <header>
//           <h4>Men's and women's adidas footwear sizing</h4>
//           <h5>FIND YOUR SIZE</h5>
//           <a>Do you know how to measure?</a>
//         </header>
//         <div className={styles.columnsTable}>
//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>Heel-toe measurement</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>US - Men's</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>US - Women's</span>
//                 </td>
//               </tr>

//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>UK</span>
//                 </td>
//               </tr>

//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>EU</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>JP</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   </div>,
//   this.el
// );
