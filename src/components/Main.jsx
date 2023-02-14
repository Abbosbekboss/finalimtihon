// import React, { useState, useRef, useEffect } from 'react';
// import classModal from './modal.module.css';
// import axios from 'axios';
// import { Link, useLocation } from 'react-router-dom';
// import Pagination from './pagination';
// import { useTranslation } from 'react-i18next';

// function Main() {
//     const [modal, setModal] = useState(false);
//     const [editClick, seteditClick] = useState(false);
//     const [listApi, setlistApi] = useState([]);
//     const location = useLocation();
//     const titleRef = useRef();
//     const authorRef = useRef();
//     const categoryRef = useRef();
//     const costRef = useRef();
//     const dateRef = useRef();
//     const numberRef = useRef();
//     const url = new URLSearchParams(location.search)
//     const { t } = useTranslation();

//     function ModalFunc() {
//         setModal(true)
//     };
//     function ModalFunc_X() {
//         setModal(false)
//     };

//     function AddFormAPI(evt) {
//         evt.preventDefault();
//         const push = {
//             title: titleRef.current.value,
//             author: authorRef.current.value,
//             category: categoryRef.current.value,
//             cost: costRef.current.value,
//             date: dateRef.current.value,
//             number: numberRef.current.value,
//         };

//         axios.post(`https://books-77970-default-rtdb.firebaseio.com/books.json`, push).then((res) => {
//             console.log(res);
//             setModal(false)
//         }).catch((err) => {
//             console.log(err);
//         }).finally(() => {
//             setModal(false)
//         })
//     }

//     useEffect(() => {
//         axios.get(`https://books-77970-default-rtdb.firebaseio.com/books.json`).then(({ data }) => {
//             // console.log(data);
//             const newApi = Object.keys(data).map((item) => {
//                 return {
//                     ...data[item],
//                     id: item,
//                 }
//             });
//             const pageNum = +url.get('page') || 1
//             setlistApi(newApi)
//         }).catch((err) => {
//             console.log(err);
//         })
//     }, [])

//     function DeleteApi({ id }) {
//         console.log(id);
//         axios.delete(`https://books-77970-default-rtdb.firebaseio.com/books/${id}.json`).then((data) => {
//             console.log(data)
//             window.location.reload()
//         }).catch((err) => {
//             console.log(err);
//         })

//     }

//     function EditApi({ id }) {
//         setModal(true)
//         axios.get(`https://books-77970-default-rtdb.firebaseio.com/books/${id}.json`).then((item) => {
//             console.log(item)
//             titleRef.current.value = item.data.title;
//             authorRef.current.value = item.data.author;
//             categoryRef.current.value = item.data.category;
//             costRef.current.value = item.data.cost;
//             dateRef.current.value = item.data.date;
//             numberRef.current.value = item.data.number;

//         }).catch((err) => {
//             console.log(err);
//         });
//         seteditClick(true)

//         useEffect(() => {
//             const data = {
//                 title: titleRef.current.value,
//                 author: authorRef.current.value,
//                 category: categoryRef.current.value,
//                 cost: costRef.current.value,
//                 date: dateRef.current.value,
//                 number: numberRef.current.value,
//             };
//             axios.put(`https://books-77970-default-rtdb.firebaseio.com/books/${id}.json`, data).then((item) => {
//                 console.log(item)
//                 item.data.title = titleRef.current.value;
//                 item.data.author = authorRef.current.value;
//                 item.data.category = categoryRef.current.value;
//                 item.data.cost = costRef.current.value;
//                 item.data.date = dateRef.current.value;
//                 item.data.number = numberRef.current.value;
//             }).catch((err) => {
//                 console.log(err);
//             })
//         }, []);
//     }
//     return (
//         <>
//             <main className='main'>
//                 <aside className='main_aside'>
//                     <div>
//                         <img src="" alt="" />
//                         <h3>Admin</h3>
//                     </div>
//                     <Link to={'/'} >{t('logout')}</Link>
//                 </aside>
//                 <div className='main_box'>
//                     <nav className='main_head'>
//                         <h2>{t('over')}</h2>
//                         <ul className='main_btns'>
//                             <li>
//                                 <button className='main_btn'>...</button>
//                             </li>
//                             <li>
//                                 <button onClick={() => ModalFunc()} className='main_btn_add'>{t('add')}</button>
//                             </li>
//                         </ul>
//                     </nav>
//                     <div className='apilist'>
//                         <div className='apilist_box'>
//                             {listApi.map((item, index) => (
//                                 <div className='apilist_card' key={index}>
//                                     <div>
//                                         <h3>
//                                             <span className='title_api'>Kitob: </span> {item.title}
//                                         </h3>
//                                         <h4>
//                                             <span className='title_api'>Mualif: </span> {item.author}
//                                         </h4>
//                                         <h4>
//                                             <span className='title_api'>Kitob Turi: </span> {item.category}
//                                         </h4>
//                                         <h4>
//                                             <span className='title_api'>Kitob Narxi: </span> {item.cost}$
//                                         </h4>
//                                         <h4>
//                                             <span className='title_api'>Kitob sanasi: </span> {item.date}
//                                         </h4>
//                                         <h4>
//                                             <span className='title_api'>Kitob soni: </span> {item.number}
//                                         </h4>
//                                         <div className='api_btn'>
//                                             <button onClick={() => {
//                                                 EditApi(item)
//                                                 seteditClick(true)
//                                             }} className='edit_btn'>{t('edit')}</button>
//                                             <button className='delete_btn' onClick={() => {
//                                                 DeleteApi(item)
//                                             }}>{t('delete')}</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <Pagination count={listApi.length} />
//                     </div>
//                 </div>
//                 <section className={`modal ${modal ? classModal.modalOpen : "" || classModal.modalOpen ? classModal.modalExit : ""}`} >
//                     <form onSubmit={editClick ? EditApi : AddFormAPI} className='modal_form'>
//                         <div className='modal_btn'>
//                             <button className='modal_x' onClick={ModalFunc_X}>x</button>
//                         </div>
//                         <input
//                             ref={titleRef}
//                             className='modal_input'
//                             type="text"
//                             placeholder='Book Title'
//                             required
//                         />
//                         <input
//                             ref={authorRef}
//                             className='modal_input'
//                             type="text"
//                             placeholder='Author'
//                             required
//                         />
//                         <select
//                             ref={categoryRef}
//                             className='modal_input'>
//                             <option value="Badiy">Badiy</option>
//                             <option value="Dramma">Dramma</option>
//                             <option value="Ertak">Ertak</option>
//                         </select>
//                         <input
//                             ref={costRef}
//                             className='modal_input'
//                             type="number"
//                             placeholder='Cost'
//                             required />
//                         <input
//                             ref={dateRef}
//                             className='modal_input'
//                             type="date"
//                             required />
//                         <input
//                             ref={numberRef}
//                             className='modal_input'
//                             type="number"
//                             placeholder='Rate'
//                             required />
//                         <div className='modal_btn'>
//                             <button onClick={editClick && EditApi} type='submit' className='modal_edit'>{editClick ? <b>Edit</b> : <b>{t('add')}</b>}</button>
//                         </div>
//                     </form>

//                 </section>
//             </main>

//         </>
//     )
// }

// export default Main;