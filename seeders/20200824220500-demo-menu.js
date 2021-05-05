'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('MENU', [{
       ITEM_NAME: 'Sopa de carne com legumes',
       DESCRIPCION: 'Deliciosa sopa com legumes e saborosa carne desfiada. 750ml Ideal para as Noites Frias !.',
       TIPO_COMIDA: false,
       PRECIO: 27.9,
       FOTO_URL:'https://lh3.googleusercontent.com/fife/ABSRlIqavpY-O7ZnUxZc9tzrDetlol_gykfCO5Q4d7QyVRlpSaEWym-6rj3gHzae6ZnE2nill8Es654xGLF7nvNhxMALcH7D8c_EYPdC28mwXdPY_0taI46bKblTzwIwcxGHZZSH-nESXy-dmYI6Kfewh7VeNTEGhCDKsjlCY2qC36_pIjHYZ5ZygHFme4hzd7eWx6ycwo6yHZaYt1otglQmbO6S3oL_-tmlrklLqeBX_eQxC8yaBjYV7ase2WiU81laB2YYozahhzH1M6Ik14Br_HYOSnfgc2jAoRHpiV3JGQswxdN59Wg65ZQhXZFnux0kOXlkI7vY7CcVV5U1cz69CIpTb-KqOHtwcFGgNhWV2FydraTZqb3pOWXKnObdoMQxTblSgnYhTDFaym-dDMGTk6JAOTb31wTCkecuk3hjmIDe3vF88C_AtnV5HucA6OeMhYvCIlNlGLE-W5lSiX6msZLv6zdl_yUcKY6QPrY8MRHUjFCDC67uYmqk5api6UIEXl8FTLT8rKhrZYGbthGtI_WxrigYY-wcEmEYuNZSdy19cpkr1EHK9rZ9VpHTVHLctx2hKI2M_qxs0LaQ_gf2Tcuyt6uo8-jt_J-wuo8SErSvlNEd2ltU3rul8R9tDU4bS8eDiO2H1WUd1KUXvnjP5rx86oUtGqkrxCnXdfTutdUZtcVYz60sm5UUwir72L1SN4Fhvg9Daxs4aL0-9hCmdt6X_AEywUzJOlw=w811-h552-ft',
       createdAt: new Date(),
       updatedAt: new Date()
    }, {
        ITEM_NAME: 'Sopa de Legumes com Frango e Macarrão',
        DESCRIPCION: 'Deliciosa sopa com legumes, frango temperado desfiado e espagueti - 750ml. Saboroso prato para os dias frios !',
        TIPO_COMIDA: false,
        PRECIO: 29.4,
        FOTO_URL:'https://lh3.googleusercontent.com/fife/ABSRlIpdztU91IKeSKqy4uWRyM69bbvyMy_wDcVLmSdc8XXEi1UuBbANWN0c7r_9d5D6kYrGB7KsrYlZprq2tLX59kvLrDLKkV4qzP5uMsB_qHkJ7AaP-CZe8Vl5Iz2y9TppmP6pU6bLy6rnaTXAtbORM2S6h5txXcb7LCiMtkm3x-aAvuPhETUviQSS6Lj8zWXeZDD_porIGy4F1ooT2GVJkzW6lL88Ip0Sw3DQsFzhi61VvNJb2wbbn-8cEV8e8w2qcxvkEN1G0tI1hHCZH2ZjeOBBwgB8H6FkhAH3AweiVQoETL9pKFaNEBPt0yNZlzFMEQiGjbETsKOzvT9FLuhYjHeRBGnA0pfCopfJRBXshPSW2rTg7w-BbdKXyJ1y19FQuC5YFGh0_wLYQJwe98DVi6UOmFX5rXjq2H7L9owlooQb-bHGwWlRtMgNO3GeQuI5HYBF8yI_iCBgbf6OjDEjJMugT74cTBYIEQcsGtMUD0eqjW5QkQOHjR3K6VD3L1gELX4dWAmPKMeG_wFBM_P84stxQjsa0lDM8srdbJlGRrizqvNn_7h5x_eEfRqWisBBRAS6nCLi-7BDPmhh4kw_fe35UHBEUm7QqvFdFVivCHCbHw7Xj_srrCd0xIHkGewvAtobYjB7W2nF2Z0Go_Bu8QGzt-AXKQxDTqWjIe2xipr5WTrEL3i-WgojcUKpCtu_I5zuD5T9_eBbAx4gJvwxHs2fm_Floca7HFE=w811-h552-ft',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        ITEM_NAME: 'Sopa de Legumes com Carne e Macarrão',
        DESCRIPCION: 'Deliciosa sopa com legumes, carne temperada desfiada e espagueti. - 750ml. Consistente e Saboroso prato para o fim de tarde !',
        TIPO_COMIDA: false,
        PRECIO: 27.9,
        FOTO_URL:'https://lh3.googleusercontent.com/fife/ABSRlIpE7ZiW-vdnqEd4pM5oEZlNtFZSONxY_SFYH79P9txZtleYpHsL8eCbGJiQxWKgX8jznbWSlxbxF5kL3pw5UlTmRM4lhjPltAOXE6z7-_vZhrxHUoaTU61Vk2lapau05K0pbK9oruDCUMmm_YzjmxrNUstZmzMhdzM3Uh5jUojX9dNIK1wuC-vVXlttSxVzMujGfsLJBV-tsTB9hVKDJ5yyLxZX1nr9UW7sYCi5_NToT-GySY5Q5p0b96IBr-ICNgeS0EO3EVfMZTWsSNs0jYguwFReb2r8OpsGhMTixDhfsDbDCZ7pi3zgSNGsXdwT8nYA1l3a_auIfjgvdT_nJbIAR0JjloAwyM8jzqqSXHFuSal7HUZPAxTYLlXfbKkqyYM8srhUlC6Ub0tzEvDkGFiyOLo-FM2AlgwXtO6JHXYkKU3AKpYKor-y4D3E6WASSYsSUF-rU0LL5R9W6ogqe5fdxa1NfhHnM6xoVFC1iOKDs1xoMcCvdEY3WYK1IB3lxnt4yFzt1-13JyI4OIFPKRCZc13OTS-MFayDlHFLT3ntYxJeQfOkDKxyCrGkyHDIhWGkuNywK5HeIiRaOWHLE8KQ8byiO0tQc4Nn8D9LYJFRgvJz1tQZAamoW-vfm543l5FsxEvgltB6FpBiZPaMSqtGFe81Qij544Vk8Q4-V7XSTQoWdOPY-i0In5KnBU_iL-ZSuQG0R5L7bL7T-oGMkl5Gy3Ho5ksxRME=w811-h552-ft',
        createdAt: new Date(),
        updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
