import logo from './logo.svg';
import './App.css';
import './index.css';
import Mid_div_boxes_farm from './Components_popularList/mid_div_boxes_farm';
import Nft_box from './Components_popularList/nft_box';
import Ido_box from './Components_popularList/Ido_box';
import img1 from './images/Logo3.png'
import img2 from './images/Logo4.png'
import img3 from './images/Logo5.png'
import img4 from './images/Logo6.png'
import image1 from './images/nftImg.png'
import image2 from './images/nftImg1.png'
import image3 from './images/nftImg2.png'
import image4 from './images/nftImg3.png'
import image5 from './images/nftImg5.png'
import Component1 from './images/Component1.png'
import Component2 from './images/Component2.png'
import Component3 from './images/Component3.png'
import Component4 from './images/Component4.png'
import stakeimg1 from './images/GUSD.png'
import stakeimg2 from './images/SXP.png'
import stakeimg3 from './images/HUSD.png'
import stakeimg4 from './images/GUSD.png'
import Mid_div_boxes_staking from './Components_popularList/mid_div_boxes_staking';


function App() {

  const Nftarr = [
    { id: 1, logo: img1, images: image1, Name: "ArbowMan #475", price: "473,597", SwapsName: "ArborSwap NFTs" },
    { id: 2, logo: img2, images: image2, Name: "ArbowMan #475", price: "473,597", SwapsName: "ArborSwap NFTs" },
    { id: 3, logo: img3, images: image3, Name: "ArbowMan #475", price: "473,597", SwapsName: "ArborSwap NFTs" },
    { id: 4, logo: img4, images: image4, Name: "ArbowMan #475", price: "473,597", SwapsName: "ArborSwap NFTs" },
    { id: 5, logo: img1, images: image5, Name: "ArbowMan #475", price: "473,597", SwapsName: "ArborSwap NFTs" },
    { id: 6, logo: img2, images: image1, Name: "ArbowMan #475", price: "473,597", SwapsName: "ArborSwap NFTs" }
  ];

  const Farmarr = [
    { id: 1, logo: Component1, buttonType: "Boosted", Name: "BNB/ARB", Multiplier: "Multiplier", MultiplierPercent: "7X", apyPercent: "214 %" },
    { id: 2, logo: Component2, buttonType: "Boosted", Name: "BNB/ARB", Multiplier: "Multiplier", MultiplierPercent: "7X", apyPercent: "214 %" },
    { id: 3, logo: Component3, buttonType: "Boosted", Name: "BNB/ARB", Multiplier: "Multiplier", MultiplierPercent: "7X", apyPercent: "214 %" },
    { id: 4, logo: Component4, buttonType: "Boosted", Name: "BNB/ARB", Multiplier: "Multiplier", MultiplierPercent: "7X", apyPercent: "214 %" },
  ];

  const Stakingarr = [
    { id: 1, logo: stakeimg1, buttonType: "Arborswap", Name: "BNB/ARB", Duration: "Duration (Days)", DurationDays: "60", apyPercent: "21,441 %" },
    { id: 2, logo: stakeimg2, buttonType: "Arborswap", Name: "BNB/ARB", Duration: "Duration (Days)", DurationDays: "60", apyPercent: "21,441 %" },
    { id: 3, logo: stakeimg3, buttonType: "Arborswap", Name: "BNB/ARB", Duration: "Duration (Days)", DurationDays: "60", apyPercent: "21,441 %" },
    { id: 4, logo: stakeimg4, buttonType: "Arborswap", Name: "BNB/ARB", Duration: "Duration (Days)", DurationDays: "60", apyPercent: "21,441 %" },
  ];

  return (
    <>
      <div className='main_div'>
        <div className='hero_section'>
          <div className='header_section'>
            <div className='header_first'>
              {/* <img className='logo_img' />
              <div className='logo_heading'>
                <div className='heading_first_1'>Arbor Swap</div>
                <div className='heading_first_2'>Powered by Roburna Labs</div>
              </div> */}
              <img src="images/MainLogo.png" className='logo_imgs' />
            </div>
            <div className='header_mid'>
              <div className='heading_second_1'>Product</div>
              <div className='heading_second_1'>RBA Token</div>
              <div className='heading_second_1'>Community</div>
              <div className='heading_second_1'>About</div>
            </div>
            <div className='header_last'>
              <div className="logo_img1">
                <img src="images/element-4.png" className='square_logo' />
              </div>
              <div className='heading_last_1'>Launch app</div>
            </div>
          </div>
          <div className='stats_glass'>
            <div className='stats_glass_upperdiv'>
              <div className='stats_glass_upper_left'>
                {/* <div className='upper_heading_left'> */}
                <img src="images/Activity.png" className='upper_img_left' />
                <div className='upper_left1_head'>
                  <div className='upper_heading_left_1'>
                    Total Trading Volume
                  </div>
                  <div className='upper_heading_left_2'>
                    $251,255,144
                  </div>
                </div>
                {/* </div> */}
              </div>
              <img src="images/Line7.png" className='vertical_1'></img>
              <div className='stats_glass_upper_right'>
                {/* <div className='upper_heading_right'> */}
                <img className='upper_img_right' src="images/Icon-1.png" />
                <div className='upper_right1_head'>
                  <div className='upper_heading_right_1'>
                    Total Value Locked
                  </div>
                  <div className='upper_heading_right_2'>
                    $251,255,144
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            <img src="images/Line6.png" className='horizontal_1'></img>
            <img src="images/Line6.png" className='horizontal_2'></img>
            <div className='stats_glass_lowerdiv'>
              <div className='stats_glass_lower_left'>
                {/* <div className='lower_heading_left'> */}
                <img className='lower_img_left' src="images/Icon.png" />
                <div className='lower_left1_head'>
                  <div className='lower_heading_left_1'>
                    Total Projects Launched
                  </div>
                  <div className='lower_heading_left_2'>
                    21,014
                  </div>
                </div>
                {/* </div> */}
              </div>
              <img src="images/Line7.png" className='vertical_2' ></img>
              <div className='stats_glass_lower_right'>
                {/* <div className='lower_heading_right'> */}
                <img className='lower_img_right' src="images/ticket-star.png" />
                <div className='lower_right1_head'>
                  <div className='lower_heading_right_1'>
                    Total Tickets Won
                  </div>
                  <div className='lower_heading_right_2'>
                    2,558,444
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
        <div className='mid_div'>
          <div className='popular_section'>
            <div className='mid_div_top_heading'>Popular Pools</div>
            <div className='mid_div_top_picture'>
              <div className='tractor_div'>
                <div className='tractor_div_left'>
                  <img className='tractor_img' src="images/FarmIcon.png" />
                  <div className='tractor_heading'>Farms</div>
                </div>
                <div className='tractor_div_right'>
                  <div className='tractor_heading1'>View all ></div>
                </div>
              </div>
              <div className='lock_div'>
                <div className='lock_div_left'>
                  <img className='lock_img' src="images/lock.png" />
                  <div className='lock_heading'>Staking</div>
                </div>
                <div className='lock_div_right'>
                  <div className='lock_heading1'>View all ></div>
                </div>

              </div>
            </div>
            <div className='mid_div_top'>
              <div className='mid_div_top_left'>
                {Farmarr?.map((data) => <div className='mid_div_top_left_box'>
                  <Mid_div_boxes_farm data={data} />
                </div>)}
                {/* <div className='mid_div_top_left_box'>
                  <Mid_div_boxes />
                </div>
                <div className='mid_div_top_left_box'>
                  <Mid_div_boxes />
                </div>
                <div className='mid_div_top_left_box'>
                  <Mid_div_boxes />
                </div> */}
              </div>
              <div className='mid_div_top_right'>
                {Stakingarr.map((data) => <div className='mid_div_top_right_box'>
                  <Mid_div_boxes_staking data={data} />
                </div>)}
                {/* <div className='mid_div_top_right_box'>
                  <Mid_div_boxes />
                </div>
                <div className='mid_div_top_right_box'>
                  <Mid_div_boxes />
                </div>
                <div className='mid_div_top_right_box'>
                  <Mid_div_boxes />
                </div> */}
              </div>
            </div>
          </div>
          <div className='nft_section'>
            <div className='nft_heading'>Trending NFTs</div>
            <div className='nft_collection_div'>
              {Nftarr?.map((data) => <div className='nft_box'>
                <Nft_box data={data} />
              </div>)}
            </div>
            <div id="button_3">
              <div className='nft_button_heading'>View All</div>
            </div>
          </div>
          <div className='Ido_section'>
            <div className='Ido_heading'>Featured IDOs</div>
            <div className='Ido_collection_div'>
              <div className='Ido_box'>
                <Ido_box />
              </div>
              <div className='Ido_box'>
                <Ido_box />
              </div>
              <div className='Ido_box'>
                <Ido_box />
              </div>

              <div className='Ido_box'>
                <Ido_box />
              </div>
              <div className='Ido_box'>
                <Ido_box />
              </div>
              <div className='Ido_box'>
                <Ido_box />
              </div>
              <div id="button_6">
                <div className='Ido_button_heading'>View All</div>
              </div>
            </div>
          </div>
          <div className='partners_section'>
            <div className="partner_div_heading">Partners</div>
            <div className='partners_collection'>
              <div className='partner_div_top'>
                <img className='partner_1' src="images/BSC_1.png" />
                <img className='partner_2' src="images/dapp.png" />
                <img className='partner_3' src="images/Ten1.png" />
                <img className='partner_4' src="images/Defistation2.png" />
              </div>
              <div className='partner_div_bottom'>
                <img className='partner_5' src="images/Beefy.png" />
                <img className='partner_6' src="images/BSCNews.png" />
                <img className='partner_7' src="images/CoinGecko.png" />
              </div>
            </div>
          </div>
        </div>
        <div className='footer_div'>
          <div className='footer_div_left'>
            <div className='footer_div_left_top'>
              <img className='footer_top_img' src="images/LogoWhite.png"></img>
            </div>
            <div className='footer_div_left_mid1'>Want to join Arbor on this new Journey?</div>
            <input className='footer_div_left_mid2' placeholder='Enter your email'></input>
            <div className='footer_div_left_bottom'>
              <img className='footer_bottom_img' src="images/Roburna_1.png"></img>
            </div>
          </div>
          <div className='footer_div_right'>
            <div className='footer_div_right_top_heading'>
              <div className='footer_right_heading_left'>Products</div>
              <div className='footer_right_heading_right'>Resources</div>
            </div>
            <div className='footer_div_right_top'>
              <div className='footer_div_right_top_left'>
                <div className='footer_right_heading_l1'>Launchpad</div>
                <div className='footer_right_heading_l1'>Marketplace</div>
                <div className='footer_right_heading_l1'>Exchange</div>
                <div className='footer_right_heading_l1'>Lottery</div>
              </div>
              <div className='footer_div_right_top_right'>
                <div className='footer_right_heading_r1'>Docs</div>
                <div className='footer_right_heading_r1'>Marketplace</div>
                <div className='footer_right_heading_r1'>Roadmap</div>
                <div className='footer_right_heading_r1'>Apply Listing</div>
              </div>
            </div>
            <div className='footer_div_right_mid'>Community</div>
            <div className='footer_div_right_bottom'>
              <img className='telegram' src="images/Tel.png" />
              <img className='twitter' src="images/Twit.png" />
              <img className='Instagram' src="images/Insta.png" />
              <img className='dribble' src="images/dribble.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
