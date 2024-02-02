import { useState } from 'react';
import './App.css';

function App() {

  let [id, setid] = useState();
  let [fid, setfid] = useState();
  let [name, setname] = useState();
  let [fname, setfname] = useState();
  let [chnum, setchnum] = useState();
  let [s1, sets1] = useState();
  let [s2, sets2] = useState();
  let [s3, sets3] = useState();
  let [s4, sets4] = useState();
  let [s5, sets5] = useState();
  let [fs1, setfs1] = useState();
  let [fs2, setfs2] = useState();
  let [fs3, setfs3] = useState();
  let [fs4, setfs4] = useState();
  let [fs5, setfs5] = useState();
  let [ftot, setftot] = useState();
  let [fper, setfper] = useState();
  let [fmin, setfmin] = useState();
  let [fmax, setfmax] = useState();
  let [fres, setfres] = useState();
  let [arr, setarr] = useState([]);
  let [temparr, settemparr] = useState([]);
  const addvalue = () => {
    // sum per min max result(pass , atkt, fail) 
    let sum = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5);
    let persentage = sum / 5;
    let min = Math.min(Number(s1), Number(s2), Number(s3), Number(s4), Number(s5));
    let max = Math.max(Number(s1), Number(s2), Number(s3), Number(s4), Number(s5));
    let temp = 0, result, color;
    if (Number(s1) >= 35) { temp++ }
    if (Number(s2) >= 35) { temp++ }
    if (Number(s3) >= 35) { temp++ }
    if (Number(s4) >= 35) { temp++ }
    if (Number(s5) >= 35) { temp++ }
    if (temp === 5) {
      result = "PASS";
      color = "green";
    } else if (temp === 3 || temp === 4) {
      result = "ATKT";
      color = "blue";
    } else {
      result = "FAILL";
      color = "red";
    }
    let temp1 = [...arr, [color, id, name, s1, s2, s3, s4, s5, sum, persentage, min, max, result]]
    settemparr(temp1);
    setarr(temp1)
    setid('');
    setname('');
    sets1('');
    sets2('');
    sets3('');
    sets4('');
    sets5('');
  }
  const sortval = () => {
    let te = [...arr]
    for (let i = 0; i < te.length; i++) {
      for (let j = i + 1; j < te.length; j++) {
        if (te[i][9] < te[j][9]) {
          let a = te[j];
          te[j] = te[i]
          te[i] = a
        }
      }
    }
    settemparr(te)
  }
  return (
    <>
      <table className='adfi'>
        <tbody>
          <tr>
            <td>
              <input type="text" value={id} onChange={(e) => setid(e.target.value)} placeholder='Enter id' />
            </td>
            <td className='hid'>
              <span> id : </span> <input type="text" value={fid} onChange={(e) => {
                setfid(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[1] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter name' />
            </td>
            <td className='hid'>
              <span>Name : </span> <input type="text" value={fname} onChange={(e) => {
                setfname(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[2] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={s1} onChange={(e) => sets1(e.target.value)} placeholder='Enter s1 Marks' />
            </td>
            <td className='hid'>
              <span> s1 : </span> <input type="text" value={fs1} onChange={(e) => {
                setfs1(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[3] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={s2} onChange={(e) => sets2(e.target.value)} placeholder='Enter s2 Marks' />
            </td>
            <td className='hid'>
              <span>s2 : </span> <input type="text" value={fs2} onChange={(e) => {
                setfs2(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[4] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={s3} onChange={(e) => sets3(e.target.value)} placeholder='Enter s3 Marks' />
            </td>
            <td className='hid'>
              <span>s3 : </span> <input type="text" value={fs3} onChange={(e) => {
                setfs3(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[5] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={s4} onChange={(e) => sets4(e.target.value)} placeholder='Enter s4 Marks' />
            </td>
            <td className='hid'>
              <span>s4 : </span> <input type="text" value={fs4} onChange={(e) => {
                setfs4(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[6] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={s5} onChange={(e) => sets5(e.target.value)} placeholder='Enter s5 Marks' />
            </td>
            <td className='hid'>
              <span> s5 : </span> <input type="text" value={fs5} onChange={(e) => {
                setfs5(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[7] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className='hid'>
              <span>total : </span> <input type="text" value={ftot} onChange={(e) => {
                setftot(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[8] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className='hid'>
              <span> persentage : </span> <input type="text" value={fper} onChange={(e) => {
                setfper(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[9] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className='hid'>
              <span> min : </span> <input type="text" value={fmin} onChange={(e) => {
                setfmin(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[10] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className='hid'>
              <span> max : </span> <input type="text" value={fmax} onChange={(e) => {
                setfmax(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[11] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className='hid'>
              <span> result : </span> <input type="text" value={fres} onChange={(e) => {
                setfres(e.target.value);
                let temp1 = e.target.value;
                let temp = arr.map((e1) => {
                  return (
                    e1[12] === temp1 ? e1 : false
                  )
                })
                settemparr(temp);
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={addvalue}>Add</button>
            </td>
            <td className='hid'>
              <button onClick={(e) => {
                settemparr(arr);
              }}>See All</button>
            </td>
          </tr>
        </tbody>
      </table>
      Find per.   <input type="text" value={chnum} onChange={(e) => {
        setchnum(e.target.value);
        let temp1 = e.target.value;
        let temp2 = arr.filter((e1) => {
          return Number(e1[9]) >= Number(temp1) ? e1 : ''
        })
        settemparr(temp2)
      }} />
      <br />
      <input type="checkbox" onChange={(e) => {
        let temp2
        if (e.target.checked === true) {
          temp2 = arr.filter((e1) => {
            return e1[12] === 'PASS' ? e1 : ''
          })
        }
        else {
          temp2 = [...arr]
        }
        settemparr(temp2)
      }} />PASS
      <br />
      <input type="checkbox" onChange={(e) => {
        let temp2
        if (e.target.checked === true) {
          temp2 = arr.filter((e1) => {
            return e1[12] === 'ATKT' ? e1 : ''
          })
        }
        else {
          temp2 = [...arr]
        }
        settemparr(temp2)
      }} />ATKT
      <br />
      <input type="checkbox" onChange={(e) => {
        let temp2
        if (e.target.checked === true) {
          temp2 = arr.filter((e1) => {
            return e1[12] === 'FAILL' ? e1 : ''
          })
        }
        else {
          temp2 = [...arr]
        }
        settemparr(temp2)
      }} />FAILL
      <br />
      <button onClick={sortval}>Sort</button>
      <table cellSpacing={0}>
        <tbody>
          <tr className='heading'>
            <td>id</td>
            <td>name</td>
            <td>s1</td>
            <td>s2</td>
            <td>s3</td>
            <td>s4</td>
            <td>s5</td>
            <td>total</td>
            <td>persentage</td>
            <td>min</td>
            <td>max</td>
            <td>result</td>
          </tr>
          {
            temparr.map((e, ind) => {
              return (
                <tr key={ind} style={{ backgroundColor: e[0] }}>
                  <td>{e[1]}</td>
                  <td>{e[2]}</td>
                  <td>{e[3]}</td>
                  <td>{e[4]}</td>
                  <td>{e[5]}</td>
                  <td>{e[6]}</td>
                  <td>{e[7]}</td>
                  <td>{e[8]}</td>
                  <td>{e[9]}</td>
                  <td>{e[10]}</td>
                  <td>{e[11]}</td>
                  <td>{e[12]}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table >

    </>
  );
}

export default App;
