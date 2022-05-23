import React from 'react'
import dai from '../dai.png'

import dapp from '../reward.png'

import './Main.css'

class Main extends React.Component {
  render() {
    return (
        <div className="content">
          <div className="head">
            <div className="headRow">
              <img src={dai} alt='mDAI' />
              <div>
                <h3>Staking Balance</h3>
                <p>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</p>
              </div>
            </div>
            <div className="headRow">
              <img src={dapp} alt='DAPP' />
              <div>
                <h3>Reward Balance</h3>
                <p>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</p>
              </div>
            </div>
          </div>

          <div >
            <form onSubmit={(event) => {
              event.preventDefault()
              let amount
              amount = this.input.value.toString()
              amount = window.web3.utils.toWei(amount, 'Ether')
              this.props.stakeTokens(amount)
            }}>
              <div>
                <label className='label'><span>Stake Tokens</span><span>Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}</span></label>
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="0"
                  className="input"
                  ref={(input) => { this.input = input }}
                  required />
                <div className="icon">
                  <img src={dai} height='32' width='32' />
                </div>
              </div>
              <div className='actions'>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault()
                    this.props.unstakeTokens()
                  }}>
                  UN-STAKE...
                </button>

                <button type="submit" >STAKE!</button>
              </div>
            </form>
          </div>
        </div>
   
    )
  }
}

export default Main;