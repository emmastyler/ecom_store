import React, {useEffect, useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiCamera } from 'react-icons/fi'
import Countdown from 'react-countdown'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client08,
  client10, client12, client13,
  gif1, gif2, gif3, gif4, gif5, gif6,
  item1, item2, item3, item4, item5, item6, item7, item8, item9, item10,
  single, ofcDesk, prodToCard, bg1, bg2, bg3, oldNaira, newNaira,
} from '../../components/imageImport'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, decreaseCart, getTotal, removeFromCart } from '../../features/cartSlice'
const CreateProfile = () => {
  const navigate = useNavigate()

  const createdData = [
    {
      image: gif1,
      title: 'Deep Sea Phantasy',
      type: 'GIFs',
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      type: 'Arts',
      id: ''
    },
    {
      image: gif2,
      title: 'Crypto Egg Stamp #5',
      type: 'Games',
      id: ''
    },
    {
      image: item2,
      title: 'Colorful Abstract Painting',
      type: '',
      id: 'June 03, 2022 5:3:1'
    },
    {
      image: item3,
      title: 'Liquid Forest Princess',
      type: '',
      id: ''
    },
    {
      image: gif3,
      title: 'Spider Eyes Modern Art',
      type: 'GIFs',
      id: 'June 10, 2022 1:0:1'
    },
    {
      image: item4,
      title: 'Synthwave Painting',
      type: '',
      id: ''
    },
    {
      image: gif4,
      title: 'Contemporary Abstract',
      type: 'GIFs',
      id: ''
    },
  ]
  const onSaleData = [
    {
      image: gif1,
      title: 'Deep Sea Phantasy',
      type: 'GIFs',
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      type: 'Arts',
      id: ''
    },
    {
      image: gif2,
      title: 'Crypto Egg Stamp #5',
      type: 'Games',
      id: ''
    },
  ]

  const followerData = [
    {
      name: 'CutieGirl',
      location: 'Brookfield, WI',
      image: client02,
      subMenu: [item1, item2, item3, item4, item5, gif4],
    },
    {
      name: 'FunnyGuy',
      location: 'Brookfield, WI',
      image: client13,
      subMenu: [item3, gif1, item9, item6, item1, gif2],
    },
    {
      name: 'NorseQueen',
      location: 'Brookfield, WI',
      image: client03,
      subMenu: [gif5, item2, gif6, item4, item5],
    },
    {
      name: 'BigBull',
      location: 'Brookfield, WI',
      image: client04,
      subMenu: [item7, item8, item9, item10],
    },
    {
      name: 'KristyHoney',
      location: 'Brookfield, WI',
      image: client10,
      subMenu: [item1, item2, item3, item4, item5, item6],
    },
    {
      name: 'Princess',
      location: 'Brookfield, WI',
      image: client12,
      subMenu: [item5, item8, item4, item7, item5, item10],
    },
  ]

  const activityData = [
    {
      title: 'Digital Art Collection',
      author: 'Panda',
      time: '1 hours ago',
      favorite: 'Started Following',
      image: item1,
    },
    {
      title: 'Skrrt Cobain Official',
      author: 'ButterFly',
      time: '2 hours ago',
      favorite: 'Liked by',
      image: gif1,
    },
    {
      title: 'Wow! That Brain Is Floating',
      author: 'ButterFly',
      time: '2 hours ago',
      favorite: 'Liked by',
      image: item2,
    },
    {
      title: 'Our Journey Start',
      author: 'CalvinCarlo',
      time: '5 hours ago',
      favorite: 'Listed by',
      image: item3,
    },
    {
      title: 'BitBears',
      author: 'ButterFly',
      time: '8 hours ago',
      favorite: 'Liked by',
      image: gif2,
    },
    {
      title: 'Little Kokeshi #13',
      author: 'ButterFly',
      time: '10 hours ago',
      favorite: 'Liked by',
      image: item4,
    },
    {
      title: 'EVOL Floater',
      author: 'CutieGirl',
      time: '13 hours ago',
      favorite: 'Started Following',
      image: gif3,
    },
    {
      title: 'Smart Ape Club (SAC) - Limited Edition',
      author: 'CalvinCarlo',
      time: '18 hours ago',
      favorite: 'Listed by',
      image: gif4,
    },
    {
      title: 'THE SECRET SOCIETY XX #775',
      author: 'CalvinCarlo',
      time: '23 hours ago',
      favorite: 'Listed by',
      image: gif5,
    },
    {
      title: 'Create Your Own World',
      author: 'ButterFly',
      time: '24 hours ago',
      favorite: 'Liked by',
      image: item5,
    },
  ]

  const loadFile = function (event) {
    var image = document.getElementById(event.target.name)
    image.src = URL.createObjectURL(event.target.files[0])
  }

  /* my config */

    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
   //console.log('noraml '+modal);


    const handleSubmit = (e) => {
      e.preventDefault()
      //console.log(address);
    }

    const ref = useRef(null);

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleRemoveFromCart = (cartItem) => {
      dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
      dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
      dispatch(addToCart(cartItem))
    }

    useEffect(()=>{
      dispatch(getTotal())
    },[cart, dispatch])
  // my config ends here
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section className="bg-creator-profile">
        <div className="container">
          <div className="profile-banner">
            <input
              id="pro-banner"
              name="profile-banner"
              type="file"
              className="d-none"
              onChange={e => loadFile(e)}
            />
            <div className="position-relative d-inline-block">
              <img
                src={single}
                className="rounded-md shadow-sm img-fluid"
                id="profile-banner"
                alt=""
              />
              <label
                className="icons position-absolute bottom-0 end-0"
                htmlFor="pro-banner"
              >
                <span className="btn btn-icon btn-sm btn-pills btn-primary">
                  <FiCamera className="icons" />
                </span>
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col">
              <div className="text-center mt-n80">
                <div className="profile-pic">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    className="d-none"
                    onChange={e => loadFile(e)}
                  />
                  <div className="position-relative d-inline-block">
                    <img
                      src={client01}
                      className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                      id="profile-image"
                      alt=""
                    />
                    <label
                      className="icons position-absolute bottom-0 end-0"
                      htmlFor="pro-img"
                    >
                      <span className="btn btn-icon btn-sm btn-pills btn-primary">
                        <FiCamera className="icons" />
                      </span>
                    </label>
                  </div>
                </div>

                <div className="content mt-3">
                  <h5 className="mb-3">streetboyyy</h5>
                  <small className="text-muted px-2 py-1 rounded-lg shadow">
                    bhcedeh5sdijuj-husac4saiu{' '}
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="text-primary h5 ms-1"
                    >
                      <i className="uil uil-copy"></i>
                    </a>
                  </small>

                  <h6 className="mt-3 mb-0">
                    Artist, UX / UI designer, and Entrepreneur
                  </h6>

                  <div className="mt-4">
                    <a
                      href="/creator-profile-edit"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile-edit')
                      }}
                      className="btn btn-pills btn-outline-primary mx-1"
                    >
                      Edit Profile
                    </a>
                    <a
                      href="/upload-work"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/upload-work')
                      }}
                      className="btn btn-pills btn-icon btn-outline-primary mx-1"
                    >
                      <i className="uil uil-folder-upload"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <ul
                className="nav nav-tabs border-bottom"
                id="myTab"
                role="tablist"
              >

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Activites-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Activites"
                    type="button"
                    role="tab"
                    aria-controls="Activites"
                    aria-selected="true"
                  >
                    Cart
                  </button>
                </li>     
                    
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Create-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#CreateItem"
                    type="button"
                    role="tab"
                    aria-controls="CreateItem"
                    aria-selected="false"
                  >
                    Created
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Liked-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Liked"
                    type="button"
                    role="tab"
                    aria-controls="Liked"
                    aria-selected="false"
                  >
                    Liked
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Sale-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Sale"
                    type="button"
                    role="tab"
                    aria-controls="Sale"
                    aria-selected="false"
                  >
                    On Sale
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Collection-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Collection"
                    type="button"
                    role="tab"
                    aria-controls="Collection"
                    aria-selected="false"
                  >
                    Collection
                  </button>
                </li>

               

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Followers-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Followers"
                    type="button"
                    role="tab"
                    aria-controls="Followers"
                    aria-selected="false"
                  >
                    Followers
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="About-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#About"
                    type="button"
                    role="tab"
                    aria-controls="About"
                    aria-selected="false"
                  >
                    About
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-4 pt-2" id="myTabContent">
                <div
                  className="tab-pane fade"
                  id="CreateItem"
                  role="tabpanel"
                  aria-labelledby="Create-tab"
                >
                  {/* if value select created */}
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {createdData?.map(data => (
                      <div className="col" key={data?.title}>
                        <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                          <div className="d-flex justify-content-between">
                            <div className="img-group">
                              <a
                                href="/creator-profile"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/creator-profile')
                                }}
                                className="user-avatar"
                              >
                                <img
                                  src={client08}
                                  alt="user"
                                  className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                                />
                              </a>
                              <a
                                href="/creator-profile"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/creator-profile')
                                }}
                                className="user-avatar ms-n3"
                              >
                                <img
                                  src={client05}
                                  alt="user"
                                  className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                                />
                              </a>
                              <a
                                href="/creator-profile"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/creator-profile')
                                }}
                                className="user-avatar ms-n3"
                              >
                                <img
                                  src={client06}
                                  alt="user"
                                  className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                                />
                              </a>
                            </div>

                            <span className="like-icon shadow-sm">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="text-muted icon"
                              >
                                <i className="mdi mdi-18px mdi-heart mb-0"></i>
                              </a>
                            </span>
                          </div>

                          <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                            <a
                              href="/item-detail-one"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/item-detail-one')
                              }}
                            >
                              <img
                                src={data?.image}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            {data?.type && (
                              <div className="position-absolute top-0 start-0 m-2">
                                <a
                                  href=""
                                  onClick={e => e.preventDefault()}
                                  className="badge badge-link bg-primary"
                                >
                                  GIFs
                                </a>
                              </div>
                            )}
                            <div className={`${data?.id ? '' : 'hide-data'} position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}>
                              <i className="uil uil-clock"></i>
                              <Countdown
                                date={data?.id}
                                renderer={({ days, hours, minutes, seconds }) => (
                                  <span>
                                    {days}:{hours}:{minutes}:{seconds}
                                  </span>
                                )}
                              />
                            </div>
                          </div>

                          <div className="card-body content position-relative p-0 mt-3">
                            <a
                              href="/item-detail-one"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/item-detail-one')
                              }}
                              className="title text-dark h6"
                            >
                              {data?.title}
                            </a>

                            <div className="d-flex justify-content-between mt-2">
                              <small className="rate fw-bold">20.5 ETH</small>
                              <small className="text-dark fw-bold">
                                1 out of 10
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/*end row*/}
                  </div>
                </div>
                {/* if value select like */}
                <div
                  className="tab-pane fade"
                  id="Liked"
                  role="tabpanel"
                  aria-labelledby="Liked-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 text-center">
                      <img src={ofcDesk} className="img-fluid" alt="" />

                      <div className="content">
                        <h5 className="mb-4">No Items</h5>
                        <p className="text-muted">
                          Show your appreciation for other's work by liking the
                          shots you love. We'll collect all of your likes here
                          for you to revisit anytime.
                        </p>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* if value select on sale */}
                <div
                  className="tab-pane fade"
                  id="Sale"
                  role="tabpanel"
                  aria-labelledby="Sale-tab"
                >
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {onSaleData?.map((onSale, index) => (
                      <div className="col" key={index}>
                        <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <img
                                src={client01}
                                alt="user"
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="text-dark small creator-name h6 mb-0 ms-2"
                              >
                                @StreetBoyyy
                              </a>
                            </div>
                          </div>

                          <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                            <a
                              href="/item-detail-one"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/item-detail-one')
                              }}
                            >
                              <img
                                src={onSale?.image}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <div className="position-absolute top-0 start-0 m-2">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="badge badge-link bg-primary"
                              >
                                {onSale?.type}
                              </a>
                            </div>
                            <div className="position-absolute top-0 end-0 m-2">
                              <span className="like-icon shadow-sm">
                                <a
                                  href=""
                                  onClick={e => e.preventDefault()}
                                  className="text-muted icon"
                                >
                                  <i className="mdi mdi-18px mdi-heart mb-0"></i>
                                </a>
                              </span>
                            </div>
                          </div>

                          <div className="card-body content position-relative p-0 mt-3">
                            <a
                              href="/item-detail-one"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/item-detail-one')
                              }}
                              className="title text-dark h6"
                            >
                              {onSale?.title}
                            </a>

                            <div className="d-flex align-items-center justify-content-between mt-3">
                              <div className="">
                                <small className="mb-0 d-block fw-semibold">
                                  Current Bid:
                                </small>
                                <small className="rate fw-bold">20.5 ETH</small>
                              </div>
                              <a
                                href="/item-detail-one"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/item-detail-one')
                                }}
                                className="btn btn-icon btn-pills btn-primary"
                              >
                                <i className="uil uil-shopping-bag"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/*end row*/}
                </div>
                {/* if value select collection */}
                <div
                  className="tab-pane fade "
                  id="Collection"
                  role="tabpanel"
                  aria-labelledby="Collection-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 text-center">
                      <img src={prodToCard} className="img-fluid" alt="" />

                      <div className="content mt-4">
                        <h5 className="mb-4">No Collection</h5>
                        <p className="text-muted">
                          Save interesting shots into personalized collections,
                          and discover new and interesting recommendations along
                          the way.
                        </p>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                {/* if value select follower */}
                <div
                  className="tab-pane fade"
                  id="Followers"
                  role="tabpanel"
                  aria-labelledby="Followers-tab"
                >
                  <h5 className="mb-4">{followerData?.length} Followers</h5>
                  <div className="row g-4">
                    {followerData?.map(data => {
                      return (
                        <div className="col-md-6" key={data?.name}>
                          <div className="p-4 rounded-md shadow users user-primary">
                            <div className="d-flex align-items-center">
                              <div className="position-relative">
                                <img
                                  src={data?.image}
                                  className="avatar avatar-md-md rounded-pill shadow-sm img-thumbnail"
                                  alt=""
                                />
                                <div className="position-absolute bottom-0 end-0">
                                  <a
                                    href=""
                                    onClick={e => e.preventDefault()}
                                    className="btn btn-icon btn-pills btn-sm btn-primary"
                                  >
                                    <i className="uil uil-plus"></i>
                                  </a>
                                </div>
                              </div>

                              <div className="content ms-3">
                                <h6 className="mb-0">
                                  <a
                                    href="/creator-profile"
                                    onClick={e => {
                                      e.preventDefault()
                                      navigate('/creator-profile')
                                    }}
                                    className="text-dark name"
                                  >
                                    CutieGirl
                                  </a>
                                </h6>
                                <small className="text-muted d-flex align-items-center">
                                  <i className="uil uil-map-marker fs-5 me-1"></i>{' '}
                                  {data?.location}
                                </small>
                              </div>
                            </div>

                            <div className="border-top my-4"></div>
                            <div className="row row-cols-xl-6 g-3">
                              {data?.subMenu?.map((sub, index) => (
                                <div className="col" key={index * 10}>
                                  <a
                                    href="/item-detail-one"
                                    onClick={e => {
                                      e.preventDefault()
                                      navigate('/item-detail-one')
                                    }}
                                    className="user-item"
                                  >
                                    <img
                                      src={sub}
                                      className="img-fluid rounded-md shadow-sm"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              ))}
                            </div>
                            {/*end row */}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                {/* if value select activity */}
                <div
                  className="tab-pane fade show active"
                  id="Activites"
                  role="tabpanel"
                  aria-labelledby="Activites-tab"
                >
                  <div className="row">
                  <div className="col-lg-9">
                    <h5>
                      Market Bag Items
                    </h5>
                    
                  </div>
                  </div>
      
         
          <div className="row">
            <div className="col-lg-8 col-md-7 col-12 order-2 order-md-1 mt-4 pt-2">
              <div className="rounded-md shadow">
              {cart.cartItems.length === 0 ? (<>
                <div className="d-flex justify-content-center p-3">
                <Link to="/home" style={{color: 'black'}}>Cart is empty!- Start shopping 🎉</Link>
                </div>
                <div className="d-flex justify-content-center btn-primary btn p-3"></div>
                </>
              ) :(<>
                {cart.cartItems?.map(data => {
                      return (
                        <div className="col-12 p-2" key={data?.id}>
                          <div className="card activity activity-primary rounded-md shadow p-4">
                            <div className='row'>
                              <div className='col-lg-6 col-md-6'>
                                  <div className="d-flex align-items-center">
                              <div className="position-relative">
                                <img
                                  
                                  src={'http://localhost:3000/'+data?.imageUrl}
                                  className="avatar avatar-md-md rounded-md shadow-md"
                                  alt=""
                                />

                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                  {data?.favorite === 'Started Following' ? (
                                    <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                  ) : data?.favorite === 'Liked by' ? (
                                    <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                  ) : (
                                    <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                  )}
                                </div>
                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                              </div>

                              <span className="content ms-3">
                                <a
                                  href=""
                                  onClick={e => e.preventDefault()}
                                  className="text-dark title mb-0 h6 d-block"
                                >
                                  {data?.name}
                                </a>
                                <small className="text-muted d-block mt-1">
                                  {data?.currentPrice.toLocaleString('en-NG', {style: 'currency', currency: 'NGN', minimumFractionDigits: 0, maximumFractionDigits: 0,})}
                                  <a
                                    href=""
                                    onClick={e => e.preventDefault()}
                                    className="link fw-bold"
                                  >
                                    @{data?.author}
                                  </a>
                                </small>

                                <small className="text-muted d-block mt-1">
                                  {data?.deliveryStatus}
                                </small>
                              </span>
                            
                                  </div>
                                  <button className="btn btn-danger" onClick={()=>handleRemoveFromCart(data)}><i className='uil uil-trash'></i></button>
                              </div>
                              <div className='col-lg-3 col-md-3 '>
                                  
                                  <div className='d-flex flex-row-reverse'>{(data.currentPrice * data.cartQuantity).toLocaleString('en-NG', {style: 'currency', currency: 'NGN', minimumFractionDigits: 0, maximumFractionDigits: 0,})}</div>
                             </div>

                              <div className='col-lg-3 col-md-3 '>
                                <div className='d-flex flex-row justify-content-end'>
                                <button className='btn-secondary' style={{borderRadius:'50%', width:'35px', height:'35px'}} onClick={()=>handleDecreaseCart(data)}>-</button>
                                <div className='p-2'>{data.cartQuantity}</div>
                                  <button 
                                        className='btn-warning' 
                                        style={{borderRadius:'50%', width:'35px', height:'35px'}}
                                        //disabled={data.availability < data.cartQuantity ? true : false}
                                        onClick={()=>handleIncreaseCart(data)}>+</button>
                                 
                                </div>
                                
                              
                              </div>
                            
                          </div>
                           
                            
                           

                            

                          </div>
                        </div>
                      )
                    })}
              </>)}
             
              </div>
            </div>
            {/*end col*/}
            {cart.cartItems.length >0 ? (<>
              <div className="col-lg-4 col-md-5 col-12 order-1 order-md-2 mt-4 pt-2">
                <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                
                  <div className="position-relative">
                  
                    <img
                      src={bg1}
                      className="img-fluid rounded-md"
                      alt=""
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="like-icon shadow-sm">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-muted icon"
                        >
                          <i className="mdi mdi-18px mdi-heart mb-0"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="card-body position-relative p-4">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="badge tag gradient rounded-md fw-bold"
                    >
                     not known
                    </a>

                    <ul className="list-unstyled mt-2">
                      <li className="list-inline-item ">
                        <i className="uil uil-calendar-alt text-dark h5 title me-1"></i>
                       Cart Summary
                      </li>
                    
                    </ul>
                    <div className="mt-1 d-flex justify-content-between align-items-center">
                      <p
                       
                        style={{marginBottom: '.99rem'}}

                        className="text-dark text-muted h6 mt-3"
                      >
                        Cosf of Items:
                      </p>
                      <span className=" fs-6">
                      
                        {/* <img className="" alt="" src="" /> */}
                        <p
                          
                          className="text-dark  text-muted h6 mt-1"
                        >
                       
                       {cart.cartTotalAmount.toLocaleString('en-NG', {style: 'currency', currency: 'NGN', minimumFractionDigits: 0, maximumFractionDigits: 0,})}
                        </p>
                      </span>
                    </div>

                    <div className="mt-1 d-flex justify-content-between align-items-center">
                      <p
                       
                        style={{marginBottom: '.9rem'}}

                        className="text-dark text-muted  h6 mt-3"
                      >
                        Delivery Fee:
                      </p>
                      <span className=" fs-6">
                      
                        {/* <img className="" alt="" src="" /> */}
                        <p
                        
                          className="text-dark text-muted h6 mt-1"
                        >
                        <img src={oldNaira} alt="Naira" style={{width: '1rem', marginBottom: '.2rem', opacity:'.5'}}/>
                      2,000
                        </p>
                      </span>
                    </div>
                

                    <div className="mt-1 d-flex justify-content-between align-items-center">
                      <p
                       
                        
                        className="text-dark title h5 mt-3"
                      >
                        Total:
                      </p>
                      <span className=" fs-6">
                      
                        {/* <img className="" alt="" src="" /> */}
                        <p
                         
                          className="text-dark title h5 mt-3"
                        >
                        <img src={oldNaira} alt="Naira" style={{width: '1.4rem', marginBottom: '.2rem'}}/>
                       134,500
                        </p>
                      </span>
                    </div>
                    <button className="btn btn-success btn-block"  style={{width: '100%'}}  data-bs-toggle="modal"
                      data-bs-target="#NftBuynow">Continue</button>
                  </div>
                </div>              
          
           </div>
            </>) :(<></>)}
            
            {/*end col*/}
          </div>
          {/*end row*/}
       
        {/*end container*/}
     
                
                   
                 
                </div>
                {/* if value select about */}
                <div
                  className="tab-pane fade"
                  id="About"
                  role="tabpanel"
                  aria-labelledby="About-tab"
                >
                  <h5 className="mb-4">Calvin Carlo</h5>

                  <p className="text-muted mb-0">
                    I have started my career as a trainee and prove my self and
                    achieve all the milestone with good guidance and reach up to
                    the project manager. In this journey, I understand all the
                    procedure which make me a good developer, team leader, and a
                    project manager.
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Home */}

      {/* Begin modal */}
      <div
        className="modal fade"
        id="NftBuynow"
        aria-hidden="true"
        aria-labelledby="buyNft"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-md rounded-md">
            <div className="modal-header">
              <h5 className="modal-title" id="buyNft">
                Checkout
              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Delivery Address<span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="eg - NO 34, Okeligho Street, off NDC Road Rumuigbo"
                        required={true}
                        onChange={(e)=>setAddress(e.target.value)}
                      />

                      <label className="form-label fw-bold mt-4">
                        Delivery Phone Number<span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="0812674788"
                        required={true}
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                      />

                    </div>
                  </div>
                  {/*end col*/}
                </div>
             

              {/* <div className="py-3 border-top">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> You must bid at least:</p>
                  <p className="text-primary"> 1.22 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> Service free:</p>
                  <p className="text-primary"> 0.05 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> Total bid amount:</p>
                  <p className="text-primary mb-0"> 1.27 ETH </p>
                </div>
              </div> */}

              <div className="bg-soft-success p-3 rounded shadow">
                <div className="d-flex align-items-center">
                  <i className="uil uil-exclamation-circle h2 mb-0 me-2"></i>
                  <div className="flex-1">
                    <h6 className="mb-0">This seller is verified</h6>
                    <small className="mb-0">
                      Purchase this item and enjoy
                    </small>
                  </div>
                </div>
              </div>
              
                  <div className="form-check align-items-center d-flex mt-2">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      id="AcceptT&C"
                    />
                    <label
                      className="form-check-label text-muted ms-2"
                      htmlFor="AcceptT&C"
                    >
                      I Accept{' '}
                      <a
                        href=""
                        onClick={e => e.preventDefault()}
                        className="text-primary"
                      >
                        Terms And Condition
                      </a>
                    </label>
                  </div>
                <div className="mt-4" >
                <button
                  className="btn  btn-primary w-50"
                  data-bs-target="#buyNftSuccess"
                  data-bs-toggle="modal"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!address ||!phoneNumber}
                >
                  <i className="mdi mdi-cart fs-5 me-2"></i>Buy
                </button>

                <button
                  className="btn  btn-danger"
                  data-bs-dismiss="modal"
                  id="close-modal"
                  style={{marginLeft: '1rem'}}
                >
                   <i className="uil uil-times fs-5 me-2"></i>Cancel
                </button>
               
              </div>

                </form>
            
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="buyNftSuccess"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-md rounded-md">
            <div className="position-absolute top-0 start-100 translate-middle z-index-1">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body text-center p-4">
              <h3>Thank You 🎉</h3>
              <h6 className="text-muted mb-0" 
               >You {' '}
                <span  ref={el => {
                    if (el) {
                      el.style.setProperty('color', '#34B17C', 'important');
                     
                    }
                }}> Successfully {' '}</span> Purchased All Items
                
              </h6>

              <ul className="rounded-md shadow p-4 border list-unstyled mt-4">
                <li className="d-flex justify-content-between">
                  <span className="fw-bold me-5">Status:</span>
                  <span className="text-warning">Processing</span>
                </li>

                <li className="d-flex justify-content-between mt-2">
                  <span className="fw-bold me-5">Transaction ID:</span>
                  <span className="text-muted">qhut0...hfteh45</span>
                </li>
              </ul>

              <ul className="list-unstyled social-icon mb-0 mt-4">
                {[
                  'uil uil-facebook-f',
                  'uil uil-instagram',
                  'uil uil-linkedin',
                  'uil uil-dribbble',
                  'uil uil-twitter',
                ]?.map((data, index) => {
                  return (
                    <li className="list-inline-item lh-1 mr-1" key={index}>
                      <a href="" className="rounded">
                        <i className={data}></i>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End modal */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default CreateProfile
