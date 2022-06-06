import React, { useContext } from 'react'

const styles = {
    inputAmount: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
    formContainer: `flex items-center`,
    select: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
    options: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white`,
    noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}

const BuyTokens = () => {
    return (
        <form className={styles.formContainer}>
            <div className='flex h-full w-full flex-col items-center'>
                <select
                    className={styles.select}
                >
                    <option className={styles.options} value='ETH'>
                        ETH
                    </option>
                    <option className={styles.options} value='DOGE'>
                        DOGE
                    </option>
                    <option className={styles.options} value='USDC'>
                        USDC
                    </option>
                    <option className={styles.options} value='LINK'>
                        LINK
                    </option>
                    <option className={styles.options} value='DAI'>
                        DAI
                    </option>
                </select>
                <select
                    className={styles.select}
                >
                    <option className={styles.options} >
                        DOGE
                    </option>
                    <option className={styles.options} >
                        USDC
                    </option>
                    <option className={styles.options} >
                        LINK
                    </option>
                    <option className={styles.options} >
                        DAI
                    </option>
                </select>
                <input
                    placeholder='Amount...'
                    className={styles.inputAmount}
                    type='text'
                />
            </div>
        </form>

    )
}

export default BuyTokens