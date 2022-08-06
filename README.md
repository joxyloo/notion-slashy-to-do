# NotionSlashyTodo
Add to-do items with #category to a main to-do database from any Notion page.

![](https://lh3.googleusercontent.com/pw/AL9nZEXvr3Rv4ngmTvazG4BxWqFIfpJnXhjg_jUvSiVMNZ5Gifx10pvbUcZeT5Azu2WCTsFP7gqnuXINpOqoh4hwuoGqK4mUl91IBDg0v11Als56DxowD2o7zSQ_7TR6Y2mK-RLi3JIRF4RntTCbadXQOY7IEQ=w1486-h1044-no?authuser=0)

## Setup

### Notion To-do Database
1. Create a database with "**Category**" (multi-select) and "**Source**" (URL) properties.


### Slashy Command
1. Install [Slashy](https://github.com/alyssaxuu/slashy) browser extension.
2. Create a new Slashy command.
3. Choose <em>Script</em> as "Type of action".
4. Insert the code from [slashy-script.js](https://github.com/xinyongjo/NotionSlashyTodo/blob/main/slashy-script.js).

![](https://lh3.googleusercontent.com/pw/AL9nZEXegqBB8UBRqHU74IbS0fkT0_1hUMXX8KLVVw7_g9OzDxwVQzkN4gsP8KFa6swTS-FwTEwlaTG-qJB53wq4WL3y0dTD3l36jTKKskjIT45JSK3GVUAs24U_xlje6L_X_GAWqQhbjcfOFujSsDlNLO-TxA=w2590-h1408-no?authuser=0)

## How to Use
1. Run the code in [index.js](https://github.com/xinyongjo/NotionSlashyTodo/blob/main/index.js).
1. Type the command <em>**/addtodo**</em> and add a to-do item with #category(optional).
2. The to-do item will be added to:
   - Current page (linked to the to-do database)
   - To-do database (current page's URL will be added to the "**Source**" column)

![](https://lh3.googleusercontent.com/jmWGMN0OAjw_xU0JtRLGnHYMG7S_YB92p8zGWnZ5rXy7e_m69UZ5EOZaMllVl_kzJJMhkYxLqd_4wg_Z6sN9iZasRi3FSy1AN58iKicwuMG3xwkeYio3qzXQnHE8mRUWfsl0JwSU9gg1g89aaiC7QaaAhAer2134kT05qRXafen2kqPYfL7gps_CsE7KYrJ-3cIzsg9qwtpkf6poLMFkHf3lI0LsDfDSgQ0xq2Jh1P08zSEw9_sz5nzgqZZVgIb2sPDUIqksv6a5ZKqUgSvVbR4f58ayYAsTnB3Zvafv3Nncn48E5xudhIYij9EF1DkwZ_8zVA9FhHc5SquBI4u4YHiE6j5TonhEDuJsclRgpxZChejKvLlfbx7jFcnqcg2vTkd5PncZaO2eoNoPnLXVyFmjBrDyGLACRsR51FoBQsCWzzJzArt27BP055uopffTMaeQDksuZOpIYc2qNTGHi7FxeR9-TdU-21GNXyzEYPmKq3YASrB-_veFwm2nX2xsRTdRclifQmCgOnNu_fNSUmd3pXF7ueDt9IgE68guQJPvp_7of7SAUHktP_Ir71zJPBeKsjq2pRC2JRlJsvjjb7wkvh0st7mvgoQuNJrVCsYmEFx5r0SxqbgQGnTLDi9Si78Dt2eK5tyDB0ij3amHwKR_l-7SwzFol9le_7EOlsO75JC_-NRdgOYgcGsOVHg5pvLdz3l5NdbY__uzKvQS5o-fyI9uMqP7j0z4JVcSGK6QLMpZUrOmql2G0HO23dAL-0Mx6cRq4OZFsKfQ6-6EMibhwzj7afDW60e3V-2RSbFsuOW3sCmYTQCWN89bT63Ejn27TYWC4iEIl23Qe64T4WQ8jjgSUZYSo_jBEhKplCxapNZqXhV46KxtimKJj5vCFyhwc9MR8ARX=w2594-h1408-no?authuser=0)
![](https://lh3.googleusercontent.com/B_X1SG_hPd37Nb-okoK_6EwR5ph0-b_32JBHpReSwxygrFqdFRGTEDKOBkvyunYJbse-gzvPPekP3lZnK6fOK0KkgXUCZB76jw3b5pwPGND1YGiZww4CZMpe2JGx1vPTmmohN4f-c-sRtzH8s7K34ZQrryax56Qw3E2r3yz_S4bQfQf27Doo6eYBldno1xaIpL0tdnyw7P9znNrf_DPkT1h2BjB4eos6inxuHRLYKCGZN8cAOVPBvALEY216J1rq2z-kD7km8EyIueuXLOGmYl_O1sytQCd4guMzpxstv3X1rCblqYKqOro8UWsLLHDNl5ZXma23S0xWl-gs-EBMG-DHKv4YL_S8_2WSwTQoH2pDfDFxSPt1jxcmARefeaxNi0bWvlWZRm_hDoZa1nxqlovhAfIYHUKXOoaX0JbQP_yAvFiywdXiswj0dmMvfXOohEFtmXlLQxcqZFRYEFtGNEwEQjBvnFmcFPE59UiiHsyli_M-nylw9OEkEDzGljx2uiv9gyr0zHEsbkfCoTlT0jTLcbmT6TLTkWvRO_lQtO9g83yrCypwJEUQtIgqKyyuQ0kZdVaPVWG3BwkBhy64LRMJ5HAT7TnYhCG_dY_TyTGiQzBKAiRWm-EdRSF3xAq-ixGQUO_a1_PA3ZXHdMEIy-j2fDie3nM6CIySxiLpuGGEn1zWTyVw9mHvzYN6ByikWNrHF0T_5lgoz6QsugKz3LDHFv-EwuybeNATTCR1wmYuKzgT3SG7bWtb2I30c76x_XWdi5jfXh72dhb6cxq_cPlSVCgDS6FgLEzFasfEkoifab-JfAPEJ_2ZdYJmNV3Kxo4Q_p_a8OTdQrIl6AHXrJ6RDTJoSOR9Zhq-amoDEw-xm5nMnAI8iZvrxnJt65ACR3IINWuuCxZR=w2590-h1408-no?authuser=0)
