<div id="navigation">
{/* Navigation Menu*/}
<ul
  className={`navigation-menu nav-left ${!becomeUrl && 'nav-light'
    }`}
>
  <li className="has-submenu parent-parent-menu-item">
    <a href="" onClick={e => mobileHandler(e, 'home')}>
      Home
    </a>
    <span className="menu-arrow"></span>
    <ul
      className={`submenu megamenu ${mobile?.includes('home') ? 'open' : ''
        }`}
    >
      <li>
        <ul>
          <li className="megamenu-head">LTR Home Pages</li>
          <li
            className={
              location?.pathname === '/index' ? 'active' : ''
            }
          >
            <a
              href="/index"
              onClick={e => {
                e.preventDefault()
                navigate('/index')
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
              }}
              className="sub-menu-item"
            >
              Home One
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-two'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-two"
              onClick={e => {
                e.preventDefault()
                navigate('/index-two')
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
              }}
              className="sub-menu-item"
            >
              Home Two
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-three'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-three"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-three')
              }}
              className="sub-menu-item"
            >
              Home Three
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-four'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-four"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-four')
              }}
              className="sub-menu-item"
            >
              Home Four
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-five'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-five"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-five')
              }}
              className="sub-menu-item"
            >
              Home Five{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li className="megamenu-head">LTR Dark Home Pages</li>
          <li
            className={
              location?.pathname === '/index-dark'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-dark"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-dark')
              }}
              className="sub-menu-item"
            >
              Home One Dark
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-two-dark'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-two-dark"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-two-dark')
              }}
              className="sub-menu-item"
            >
              Home Two Dark
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-three-dark'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-three-dark"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-three-dark')
              }}
              className="sub-menu-item"
            >
              Home Three Dark
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-four-dark'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-four-dark"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-four-dark')
              }}
              className="sub-menu-item"
            >
              Home Four Dark
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-five-dark'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-five-dark"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-five-dark')
              }}
              className="sub-menu-item"
            >
              Home Five Dark{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li className="megamenu-head">RTL Home Pages</li>
          <li
            className={
              location?.pathname === '/index-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-rtl')
              }}
              className="sub-menu-item"
            >
              Home One RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-two-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-two-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-two-rtl')
              }}
              className="sub-menu-item"
            >
              Home Two RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-three-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-three-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-three-rtl')
              }}
              className="sub-menu-item"
            >
              Home Three RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-four-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-four-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-four-rtl')
              }}
              className="sub-menu-item"
            >
              Home Four RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-five-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-five-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-five-rtl')
              }}
              className="sub-menu-item"
            >
              Home Five RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li className="megamenu-head">RTL Dark Home Pages</li>
          <li
            className={
              location?.pathname === '/index-dark-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-dark-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-dark-rtl')
              }}
              className="sub-menu-item"
            >
              Home One Dark RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-two-dark-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-two-dark-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-two-dark-rtl')
              }}
              className="sub-menu-item"
            >
              Home Two Dark RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-three-dark-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-three-dark-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-three-dark-rtl')
              }}
              className="sub-menu-item"
            >
              Home Three Dark RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-four-dark-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-four-dark-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-four-dark-rtl')
              }}
              className="sub-menu-item"
            >
              Home Four Dark RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
          <li
            className={
              location?.pathname === '/index-five-dark-rtl'
                ? 'active'
                : ''
            }
          >
            <a
              href="/index-five-dark-rtl"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/index-five-dark-rtl')
              }}
              className="sub-menu-item"
            >
              Home Five Dark RTL{' '}
              {/* <span className="badge bg-warning">NEW</span> */}
            </a>
          </li>
        </ul>
      </li>

      <li className="d-none d-lg-block">
        <ul>
          <li>
            <img src={character} className="img-fluid" alt="" />
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li className="has-submenu parent-parent-menu-item">
    <a href="" onClick={e => mobileHandler(e, 'explores')}>
      Explore
    </a>
    <span className="menu-arrow"></span>
    <ul
      className={`submenu ${mobile.includes('explores') ? 'open' : ''
        }`}
    >
      <li>
        <a
          href="/explore-one"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/explore-one')
          }}
          className="sub-menu-item"
        >
          {' '}
          Explore One
        </a>
      </li>
      <li>
        <a
          href="/explore-two"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/explore-two')
          }}
          className="sub-menu-item"
        >
          {' '}
          Explore Two
        </a>
      </li>
      <li>
        <a
          href="/explore-three"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/explore-three')
          }}
          className="sub-menu-item"
        >
          {' '}
          Explore Three
        </a>
      </li>
      <li>
        <a
          href="/explore-four"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/explore-four')
          }}
          className="sub-menu-item"
        >
          {' '}
          Explore Four
        </a>
      </li>
      <li>
        <a
          href="/auction"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/auction')
          }}
          className="sub-menu-item"
        >
          Live Auction
        </a>
      </li>
      <li>
        <a
          href="/item-detail-one"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/item-detail-one')
          }}
          className="sub-menu-item"
        >
          {' '}
          Item Detail One
        </a>
      </li>
      <li>
        <a
          href="/item-detail-two"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/item-detail-two')
          }}
          className="sub-menu-item"
        >
          {' '}
          Item Detail Two
        </a>
      </li>
    </ul>
  </li>

  <li>
    <a
      href="/activity"
      onClick={e => {
        e.preventDefault()
        setTimeout(() => {
          activateMenu()
          toggleSwitcher(false)
        }, 1000)
        navigate('/activity')
      }}
      className="sub-menu-item"
    >
      {' '}
      Activity
    </a>
  </li>

  <li>
    <a
      href="/wallet"
      onClick={e => {
        e.preventDefault()
        setTimeout(() => {
          activateMenu()
          toggleSwitcher(false)
        }, 1000)
        navigate('/wallet')
      }}
      className="sub-menu-item"
    >
      Wallet
    </a>
  </li>

  <li className="has-submenu parent-parent-menu-item">
    <a href="" onClick={e => mobileHandler(e, 'pages')}>
      Pages
    </a>
    <span className="menu-arrow"></span>
    <ul
      className={`submenu ${mobile.includes('pages') ? 'open' : ''
        }`}
    >
      <li>
        <a
          href="/aboutus"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/aboutus')
          }}
          className="sub-menu-item"
        >
          About Us
        </a>
      </li>
      <li className="has-submenu parent-menu-item">
        <a href="" onClick={e => mobileHandler(e, 'creators')}>
          {' '}
          Creator{' '}
        </a>
        <span className="submenu-arrow"></span>
        <ul
          className={`submenu ${mobile.includes('creators') ? 'open' : ''
            }`}
        >
          <li>
            <a
              href="/creators"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/creators')
              }}
              className="sub-menu-item"
            >
              {' '}
              Creators
            </a>
          </li>
          <li>
            <a
              href="/creator-profile"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/creator-profile')
              }}
              className="sub-menu-item"
            >
              {' '}
              Creator Profile
            </a>
          </li>
          <li>
            <a
              href="/creator-profile-edit"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/creator-profile-edit')
              }}
              className="sub-menu-item"
            >
              {' '}
              Profile Edit
            </a>
          </li>
          <li>
            <a
              href="/become-creator"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/become-creator')
              }}
              className="sub-menu-item"
            >
              {' '}
              Become Creator
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="/collections"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/collections')
          }}
          className="sub-menu-item"
        >
          Collections
        </a>
      </li>
      <li className="has-submenu parent-menu-item">
        <a href="" onClick={e => mobileHandler(e, 'blog')}>
          {' '}
          Blog{' '}
        </a>
        <span className="submenu-arrow"></span>
        <ul
          className={`submenu ${mobile.includes('blog') ? 'open' : ''
            }`}
        >
          <li>
            <a
              href="/blogs"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/blogs')
              }}
              className="sub-menu-item"
            >
              {' '}
              Blogs
            </a>
          </li>
          <li>
            <a
              href="/blog-sidebar"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/blog-sidebar')
              }}
              className="sub-menu-item"
            >
              {' '}
              Blog with sidebar
            </a>
          </li>
          <li>
            <a
              href="/blog-detail"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/blog-detail')
              }}
              className="sub-menu-item"
            >
              {' '}
              Blog Detail
            </a>
          </li>
        </ul>
      </li>
      <li className="has-submenu parent-menu-item">
        <a href="" onClick={e => mobileHandler(e, 'auth')}>
          {' '}
          Auth Pages{' '}
        </a>
        <span className="submenu-arrow"></span>
        <ul
          className={`submenu ${mobile.includes('auth') ? 'open' : ''
            }`}
        >
          <li>
            <a
              href="/login"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/login')
              }}
              className="sub-menu-item"
            >
              {' '}
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/signup')
              }}
              className="sub-menu-item"
            >
              {' '}
              Signup
            </a>
          </li>
          <li>
            <a
              href="/reset-password"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/reset-password')
              }}
              className="sub-menu-item"
            >
              {' '}
              Forgot Password
            </a>
          </li>
          <li>
            <a
              href="/lock-screen"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/lock-screen')
              }}
              className="sub-menu-item"
            >
              {' '}
              Lock Screen
            </a>
          </li>
        </ul>
      </li>
      <li className="has-submenu parent-menu-item">
        <a href="" onClick={e => mobileHandler(e, 'special')}>
          {' '}
          Special
          {/* <span className="badge bg-warning">NEW</span> */}{' '}
        </a>
        <span className="submenu-arrow"></span>
        <ul
          className={`submenu ${mobile.includes('special') ? 'open' : ''
            }`}
        >
          <li>
            <a
              href="/comingsoon"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/comingsoon')
              }}
              className="sub-menu-item"
            >
              {' '}
              Coming Soon
            </a>
          </li>
          <li>
            <a
              href="/maintenance"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/maintenance')
              }}
              className="sub-menu-item"
            >
              {' '}
              Maintenance
            </a>
          </li>
          <li>
            <a
              href="/error"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/error')
              }}
              className="sub-menu-item"
            >
              {' '}
              404!
            </a>
          </li>
        </ul>
      </li>
      <li className="has-submenu parent-menu-item">
        <a href="" onClick={e => mobileHandler(e, 'help')}>
          {' '}
          Help Center
          {/* <span className="badge bg-warning">
            NEW
          </span>{' '} */}
        </a>
        <span className="submenu-arrow"></span>
        <ul
          className={`submenu ${mobile.includes('help') ? 'open' : ''
            }`}
        >
          <li>
            <a
              href="/helpcenter-overview"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/helpcenter-overview')
              }}
              className="sub-menu-item"
            >
              {' '}
              Overview
            </a>
          </li>
          <li>
            <a
              href="/helpcenter-faqs"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/helpcenter-faqs')
              }}
              className="sub-menu-item"
            >
              {' '}
              FAQs
            </a>
          </li>
          <li>
            <a
              href="/helpcenter-guides"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/helpcenter-guides')
              }}
              className="sub-menu-item"
            >
              {' '}
              Guides
            </a>
          </li>
          <li>
            <a
              href="/helpcenter-support-request"
              onClick={e => {
                e.preventDefault()
                setTimeout(() => {
                  activateMenu()
                  toggleSwitcher(false)
                }, 1000)
                navigate('/helpcenter-support-request')
              }}
              className="sub-menu-item"
            >
              {' '}
              Support
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="/upload-work"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/upload-work')
          }}
          className="sub-menu-item"
        >
          Upload Works
        </a>
      </li>
      <li>
        <a
          href="/terms"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/terms')
          }}
          className="sub-menu-item"
        >
          Terms Policy
        </a>
      </li>
      <li>
        <a
          href="/privacy"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/privacy')
          }}
          className="sub-menu-item"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="/changelog"
          onClick={e => {
            e.preventDefault()
            setTimeout(() => {
              activateMenu()
              toggleSwitcher(false)
            }, 1000)
            navigate('/changelog')
          }}
          className="sub-menu-item"
        >
          Changelog
        </a>
      </li>
    </ul>
  </li>

  <li>
    <a
      href="/contact"
      onClick={e => {
        e.preventDefault()
        setTimeout(() => {
          activateMenu()
          toggleSwitcher(false)
        }, 1000)
        navigate('/contact')
      }}
      className="sub-menu-item"
    >
      Contact
    </a>
  </li>
</ul>
{/*end navigation menu*/}
</div>