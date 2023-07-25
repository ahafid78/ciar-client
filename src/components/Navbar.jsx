import '../App.css'
import { Link } from "react-router-dom"

export default function Navbar() {
   let logoURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFhUTGBcWGBgXFhgWFRgZFxUXGBcXFhUYHSggGRslGxUYIjEiJSkrLi4vFyAzODMtNygtLisBCgoKDg0OGxAQGi0mICYtLS0vLS0tLy0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABIEAABAwEFBQQHBgMECQUAAAABAAIDEQQFEiExBhNBUWEicYGRBzJCobHB0RRSYnKS8COC4RUzVKIWQ1Nzk7LC0vEXNERjg//EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAA5EQACAQIEAQoFAgQHAAAAAAAAAQIDEQQSITFBBRNRYXGRobHR8BSBksHhIlIyQkPSIzNicpPi8f/aAAwDAQACEQMRAD8A9xREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBFi4gZnIBeebVekVrCYrHR7swZTmwfkHtHqcu9SUqU6jtFEdWrCkryZeLyvKGBmOaRsbebjSvQDUnoFRb29KsDSW2eJ0h+8/sM8Bm4+5ea2+0yzSGSaRz3mmbjU66DkOgXOYq6f+P3811KfJ8Y/wAer7l6nLqcoSekNPP0LVavSfb3VLd3GK0GFlfe4lRk3pBvQ/8AyadzGj/pUGWcFYNlbmBe2aaCWSMZta0Mo88C4vc2rR7+7WaVKjTjdxXcRQq1asrKT77Fy2KlvGVomtVpeGupgYAwEg+26rdOQ8V6WAqnHe7CKujkYNMwzy7Lit8+0zmuwts75BQdprmDvq1xHuquTUjKcrqNvA61OUYKzf3LMihbnvszkg2aaMD2n7osOROrHk+Y4qaVdqzsyZO6ugiIhkIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALVNK1jS5xDWtFSSaAAaklfLTO2Npe9wa1uZJ0C8s2v2ldanbuOohadNMZHF3yCnw+HlWlZbcWVsTiY0I3e/Be+HWYbZbWSWomGCrYBqdHSdTyb08+SrEV1moJ8fEqUstnApXXkpGOMU+QXbgo045Yo8/UqSqyzTepCf2X/XvqPgMlhNdxA04fGlVZHRgBdlguzeUc/JnAcXfRYdVRV3sI03OWWO5A7P7Mb1wfKKRtOnF/T8vVXYtGQAAAoABkAFsJAyGQGQ7lqc9c+pVdR3Z2KNFUo5UYhoJcOAIHiADX3oRU5a6L5XMHnr8iu/Z+z45MZHZj8i46U7tfJRt5VclSu7E/d9m3cbW8dT1J1XUiKk3fUuJWCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCj71vaKzsxSupyHtO7gtW0N7Ns0JkNC4kNYObjp4DMnoF5c2yi0P3s43j3aufmddADkByAyVvDYXnf1S0RSxeMVH9MVeT8O07doL6ltRq44Yx6rBme+nPqfAKKs9jOpy+PgpWzXBZnAHBhJAOJhLHebSFudc0rM45RIPuzDPwlbmPEOXVTjBZY6HDqZqjzN3ZwwRchTr/VbQc6A1J5ZnwW1sb3ksMT2OAqajEygpUh7ciM+ND0W7fthFIwDI/IE+8nk0any1IWk6qj1voNqOGnUfQun0MrHYqy9vNsebxqMRFWs76HEeXZ1qaTbp1BR2gNaGg11JJ1cSaucepJqshaCqjUp6yOrTjCmssF6vtJhzlqxc1z2e18Cuk2cHOle+p+Oi0tbckvc0SSVGRyP7yV0umy7qJreOru86+Wngq1dVkL52g6DtH+X+tFc1BXltEnox3YREVcnCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAuS2vkaMUbA8g9puLC4toa4CcsWmRoDzC61T/SDf+4i3MZ/izDOmrWaOd3nQePJSUqcqk1CPEjq1Y0oOctkVvaS9vtc4w13UfqA5VOriRzqKeCWaMBq5Lus9Gj98FJNbku7lUIqEdkeXnOU5Oct378NuwWdxDR3D4LpZKVqjajnmNrntFXCgY06Oe4hsbTyGIip4Cq0m1FNs1pxnUmoR3Zi+7BK+SWSeRkcI3YwYRnQGY1LSTnhb3scFhZ9jmOGN8kwc6pAMmbG8GuIFK5VPU04Bb7pl7MYloIYWYi8n+8mBGOR2Xq4y4g8XVNMmkyhDp/WBbD905PkH4x7LPw6njQVB5eeV73PSKnGKUUtEVSwbIY5HyNtU4hIAj9QlxBOJ4Jbmw5Ac6E6ELrm2VtDc4rW11OEkev8zT8la3LVUrZSl0mrhHoKTPZ7dF60AkA4xODv8po7yBWy69qWYsDyWniDVrh3g0KuQXNa7qinox8TZKnKoB15HVq35zpNebXDQm9m2NIdI01DqAGtep+Sm1E3BczLJFuo3OLak0ccVCczQnOleZNFLKlOWZtlyKsrBERamwREQBERAEREAREQBERAEREAREQBERAcF8XlHZoXzSHssFacSeDR1JyXjjLa+0zOtEmZkJy4NGgYByot/pC2l+1z7qN38CE0FNHv0L+oGYHieK5rnHZ8T+/JdvBYfmoZ3u/BHn+UMTzkssdl4snLCMPYOnsnoOHeP3xUg1q44RXX+o6hd0DuB1+PVSyKAke1jXOcaNaC5xPAAVJ8gq5Zb6NslYyEF0cWNxLatq4ks7LiBSjC4F3/ANlRmAB2bSXm5jHRwu/ikUo2lQXUDQTnhJLh1NRpmRTH3LPY3GSzyOLomsc8EHMYKFwOlMTX9l1MjkeC5+IqNvKtludfk+gox5yW727PyXy7Kl7sYbWI0YweowYnUwt5gUz8qKYhto4181RtndomTFweWtfI4FuZwnsgUa7gagmnVWLG4cnD/N56FYgoyjoWpuSepZY5weKzcFVo7XTQ+GhHeFJWa9Bo40+Cw6bWwjURJOfRTl0WPCMbh2naDkPqVwXNY94cbs2tOVeJ+YCsar1ZcCxSjxCIihJgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKqeke+DZrE4tNHykRNPEYgS4/pB8SFa15X6aZSXWaPOgEjzy9kAk+fmrGFgp1op9vdqQYmeSlJ+9dCgXaxWKwCiiLFHQA58vqpeB371XomeWnuTMT1vM5IAY3G8mjW1pU9TwA1J5BQ7bRwrWunDPlRTsUm5jq1tZpDgZXTEcx4AAuPRpVSvLm4348PfvgSYSlz9Sz2W/p8/K5VL8sVojldamNBEVPtNDirJSmNkdNI2OANCfEtqtVmkjfKXOO8OCMgkggdqU9kafRXRlnLYxE1xzqC4gEknN7z1JJPeVQL7uT+znCSMl1nkoHE6xOyGdB6jjpTQmnJUIPLvsd6d5fwnXe92QTEuAMcv32nX8zdHcq5HqtNjv2SFwitQy0bKMwR1/de/Vc4twpWtf35+5YS3hG4YHtaWnm4+401UkoR3i7PzIozla0lde9i0umaQCDXkQfgQt902SSeZsTc65l33WjVxHH6kKiRWl8GTHF0R4alv17/PmvX/AEXCzmzukjlbJK8/xAMnMHsMLTmMjirxxcRRaTr5Yu61963N40c0t9Peli52SzNjY1jBRrRQBbkRc46AREQBERAEREAREQBERAEREAREQBERAEREAXlHpmgrJZ3V9lw0qPWHCvVerry70nu3xcG6wODf1Cp99B4K5gF/jJ9pTx7tRfyKVYwCPWJPMinkM114xTWvuUZZS/kKjUVGY7lMXTZN8/tZNbQu50NaedD5Fd6TUVdnnHTlOWWO7Je4bPpI4Dkwd/GnwUldQ3jzOa4M2w5+yT2n0/EQKfhaOZUZedsxncjJoHbIyo3gwdXadG16LdBbaaZDhy8AuVUzVZZn79+dzs0YxowUF7/98rFkMQ4dVy2ywNeKEBwNGkGhbRxo4Ecaj3BcMNsNNVD7QX/I57LLZiQ57sEko0jGEuoD97s68K89IJvIrstU4847IpV53T9nmMcDi9lK4AHOfEcuwSAajPLiOPAn5Hctqkz3DgD+B/zCtsVjZA5tmZo/tudxND2gTyzxU6ldt53puxhbx4V0CpTlOW0rLoVvvc6FKVKmtaak+mV/JNL79LZVrtuCeNzX0c0sIcKtdQEGoNCKHPmuu1OtDJvtMUhbPWpLWhmOuZxNY2hrU1yNak60cOe0X1LM9+7AGEVJJOEZtbw1zK3XTeMkEjHiZ+IuaHmvZLcQxDBpTvqeqi5mV755fN3LLxcGsvM00uqNn3p38SesHpGtDqNkqyTi0ihOubWnXQ5ZnI0xAVUhDt7MTQStJPCja+RFV1XxaLNbI8FpihqPVcy0xl7DzY4gcQMjkaZgqs3Ptm6xTGC0/wAeBjsLJsnPaOFXCuIcNSeRNcsOm29G0a08TGKtKnF9fH3731LbBt5JocBPKn0Ks1235iBMwayhAcQTRpIBAeD6uThnWmaoM1pZaba14c1zHYAylKObkSG88g5WjHhtDS71bS3A7Sm8Z6vi5pI/lWIKWZpu9reVzfEum6cJRgk5XfHg7adtnwLmirl3Xg2Bxs8rgGj+7J4Ny7BPIVy6ZcM7Ax4IqCCDxGYUqdym4tatbmaIiyahERAEREAREQBERAEREAREQGEjwASdACT4Lw+W9N4+Qu/1rnOPjU/E+5eu7Uz7uyTuGojeB3kUHvK8C3mY76eeS6vJsFllLsRy+UW7xXadNnsb3TNZGPX8gOJPQLsNrEFtkhhYXPfDEBkcILXzVfIRoKPr10Ckdg7S0xzgt/iNLBi4hpxVHiW/Bct8yYbbC8e3HJGepBa8e5rlNXqOUsvBW8bepBQpKCzcXf76ep1MaGClakmrnHVzjq4/TgABoFhNM5rHOjZieBk3meHgvtptEbBWR1OQ1J7hxUVLfT3VbE3D1ObszTIDIKrXxNKirSettlv6d50MHga+JkpQjdX1b0Xf6a9mpo/ty2R4myx0q3Ihh7BPtUbUmjQfEhdcV6WSKOFjJKu3oc8uDmu9V5LnFwHQV6rGJvPF45+ZzXI6yPnzB7Hs9aHU9OnL3cH4ufHXtZ6mXJdOWqtHpstL9l/Dh8yQtN5xOex7JoycR0eNCxw56ae5Q96Xi1zqGQADNxB8mtpx68FI2W6gQDip/Np0XYIGMHalPifqs/GS/b4mr5HjwqP6fyQVnt9nY0tE0YqKHtBopUEAV4Ciy+1Wc6WiL/iN+qmN9AeJf3Z/BaJ5bOASY3UHHA/5hPjerx/BlciN7Tf0/wDYjJLVE3W1Rj/9QfcCs7rvaxtnYZZ4y0Oq6tXAihrXLNTl3WKKRv8A7dhaR67i5lOVTXPupXuXRHckETS7CZXfhFc+GFo0HUnLmt/i29cvj+CJ8kpO2fX/AGr+7zsQdgdI2cy3eA5pxyiF2THNAJO7rm0lvxHCgVpftkydrWtjdHJG5rntdXeRvaaHKmhBIxU9rgVX7qLhI2PC4StlxEh1A0ZHNwrXT3qbvK4G2h28DjHaKhwmbk/FQZvpSuiihXck+DvuktPUtYjk6FGpFpZoqOzbWbV/qT1yp6NcL3eV31krxnNpc17iWNJGYBNBzbWlVZNg7ZUPir6vaz15H5KkQ37LC7c3g2jjUMtA/u3959k/sgVFZnZISx2qJ7abudz45KjtAiFz4yD93+Ga9XBZinGonve+pBVlCeGlG1strL5+9T05ERXTiBERAEREAREQBERAEREAREQFX9JEuG7Zz/ux5ysHzXhbjkvdPSVEXXbaAOAY79MrHH4LwQPC7PJ3+U+37I5WOX+In1epZdhSTJaOrA7xxH6r5f8AG9xj3YrIyVmEE0riOAiv5XFbtg6N3zz7RaweFSf+YJtgwxhkkbqY3gAjUObUgjxatMVUyKcuhfYkwdB1qlOmuLS72cV8bPP3zzG/HoQD2XGoPqjRwydk01GlFHWKorSorxyPx4rpjilxYnR4d5RxAYaGtCHCncDzHCik57DNM/HusJIGKgIBPFxrxPvXlq2SbvTu3faz7z3eE5/Dxy4lRUUtJXirdWnora78OKG0PAzq79IPzr7kszn4QGtLcPZxOplTTJuuVNSuK03rHA4iQSAioFWODcupWg7ZWcGoxZ65a/1Wio1f2sn+Owi2miVjsjnVLnvIqfVIaPWNcmnPzXXDZYxmIx30FfMklQUe2FkJzxDPXCfiFJWG+LNKexaWg8n9n4haypVF/KyWOMw89FUXf6ElvGjUEdcqLUYsbgKE51DQKuIHEgcOi+2S8bIJDv3yED1cAFCfzHh3BdztuoowW2eDC3mHNYT1qAXHxKzTpqSvKSXn5muIq1aUstKjKT7Go99u/wAzW+4LXIQCxzBwxkMAHQOOSmW7PPhiAD2VJp6xOfEmgoBpoo67doGSPJdjEjswCW4B3PNaUAA9WvvK7bx2kib2XOzAoGsq7XMnGda8yaqRwoRV1K7KkZ8o1JqnKnlS4W/PjZIhn3o2zWgMlrikcxgdGC6IOd6u+JpzHXM8lcbPGA405k/NQU91Nlu62SEVfLvHNrqHRZsz/wB40qSs9u7OLmAfMKVRUIrv9/KxVdV1pzstnb7eab6k0jZf0bHwuY9ocHZ0PTiORHMKvbPS2mwMbJhMlmJxNa7/AFRoQQDXs5GnBvDIqWjLpCXa0/SO88FKejuVsrak4ml0xAyLSC4ty/DQD381tGMql7NpdXaQYuVOlFRaTlf52s7rs2LJszfrLVEHBzd4MntbUUP5XZjLhnTmdTOKiX1sY6N/2i73GN4zwA5Ho2uRH4TlyIXTs7tiHnc2pu6lBw51DXEcBXMHoc+9ZjiHB5KunQ+D9PIoSoqSzUtV0cUXJF8C+q2VgiIgCIiAIiIAiIgCIvlUBwX5Yt/Z5of9rG9ni5pA96/MBlprkeI5L9WOkAX512ouXd3tNFTsF+/H5H9vyxEt8F0eT6mVyj8yni4XSkb7K8xRMbofWPe7P+ngte0FrLo49SATJQan1WupXiKuPgpu7tnpLQcR7Ef33cfyN9rv06qS2guqKFsD4G5wyEvLjm4Ob7ROQFWhtB/tPFaY2rFwlDfbRdquScmxnCvConlteze17PL1WvbV7bnLdV/2a0ikT9BmxwwvaOrT8Rkok3hNGSGyObmcicQ8ifgqpZrNPA41jc5g9R0ZD3toez2TWhpyAW+/tog5wZaLNiY5rXCpLHAnIh2HQ1B4rlQlGnL9Ot+9W7bXO7Wp1K9NOosuXjZuLv1xTs1bfVO71Oy+btnthG8tbSBWjcBAz1rR+aiDsE/hNEfB4+q5xNdrtBLH1ZMaj9dVujbYvZtVrb/Ox3vFFNzn+l9z+xReHttUh9cV5tGR2Gk+9F+qT6LD/Qog9qSOnTGfoukNs3C2Wr/It0L7M052q1nxip5EFM66H9L9DHw7f88P+SH9x1XVcbC5se8cR7xQVNCa8uKsLLlgb7APeSfio2y37Zmte6FpLmgDtkCpcaNbXFQaE05NPRQ9qvC1PzfaGMHLfRxjy3bj71UqUudm3FW7TsYfHfCUVCc83Rld0ltv2p6dxbHiNmXZb0yHuWmSwMlINKO7JBIIq0EjjqDmK9FXtkMP2iaYlzi1gjaWhzi+pBIaQSMsOtAM1bH4/XkaY60oHAtwtaKNGdM8iT1JUFahGC3u+gvYHH1qtS6hlitb669S0SfXoT+zc7nWHOhDw4imeHFV4xDx+Ch57UyGIGUkNp2WNFZZMuQ0HVfNknt+yRktIwsLhU6yizntDkMw2n4OqXdcrpHY3kucdSf3kr86Sk1fgebo4qdKDUd3bXsvt3/IpO1V5221YGQRytiFaxNY4NJ5kj18ua9K9FbZ4YKSROjOgDtaE107yVNXfdjWcF0X1NNFZ5H2drXSNFQHVpQHtZDUgVNFu3ZEGsnruyyw2snVRe0Gz8NqaSQGyUyeBy0Dh7Q944KP2Tv9tpiBJAkGTm6UPd8OY8VOT2tsbS97qNGp+QHE9FGnCrTvuvfibtTpTts0VvYS+n72WxTk7yA0FTU05E8eFDxBCvK8x2PhdPeM9spha9xPk0MaPJra9ar0cPUWEleDS2TaT6iXFRtPraTa6zei1h6yDlaKxki+VX1AEREAWJcsliWoDW6RaJJV0mNanwICPnlKqN+XSZLQy0YGvLWGNzXGgcK4mHTOhxZHLtK7SWZcktiWU2tmYaT3KLbrbbPZiaP5sXyCr9vtNtNQ7TkNF6bNdpK4ZrnJ4LBk8Itt02ppO7c4N5Oo4DoC6potcdqtkfEeZ+q9rn2drwUZadjA7gst33EW4u8dH1aeR5JLecp9eON3e2p81zm8Bxs8X6Wj5L060ejwnRR03o1l4ELTJHoXcidYquv6kvql6nn5t0f+Gj86fJBeEX+Fj/V/RXV/oytHDD5rX/6YWr8PmmSPQPia3733lXivZobhFmjDSakagkaE1BC3svZn+HhH8jf+0Kys9GFq/B5/0XXD6LZvaLPf9EyR6F3IPFV3/Ul9UvUrP+kBORkoOWdPcVDWraCUFzBgDTUYmtqS38ziaZcqL1Czeipvt4T5qasPoysjc3RNd3j6rKSWxFOcp6zbfa2/Mh9g7RvLM1jTUUoaaUBJHvI8ldLPAQMl3WG5WRNDY2NaOTQAPcu1tjWTU4GB3JZ7yQaNr40Uk2zLYLOgPPrz2am3hlsrDG46txNDa/hcHAtHShHIBYx3NeUtGztozj/Ga7/K0NLh0JXo7YVmIVXlhaUndr7E8cTVStfyIy6LNumBjY6AdRU+WQ7lKNKyEazDFOkkrIhbbd2fAswvoasg1ZMHwLIIAvqAIiIAiIgCIiALEtCyRAYGILEwBbUQGg2YL59lC6EQHN9kC+fZAupEBy/ZAvn2QLrRAcv2QL79lC6UQHOLMF93AW9EBp3AX3dBbUQGvdBfcCzRAY4EwrJEB8ovqIgCIiAIiIAiIgP/2Q==" 
  return (
    <div className="navbar"> 

        <nav>
                <div>
                <a href="https://laciar.com" target="_blank"><img src={logoURL} width="120px" /></a> 
                </div> 

                <div className="qui">
                    <Link to={"/produits"}>
                            <h3>Nos Produits</h3>
                    </Link> 
                </div>
                <div className="qui">
                    <Link to={"/siege"}>
                            <h3>Siege Hydra</h3>
                    </Link> 
                </div>
                <div className="qui">
                    <Link to={"/directions"}>
                            <h3>Directions</h3>
                    </Link> 
                </div>
                <div className="qui">
                    <Link to={"/agences"}>
                            <h3>Agences CIAR</h3>
                    </Link> 
                </div>
                <div className="qui">
                    <Link to={"/"}>
                            <h3>Qui somme-nous ?</h3>
                    </Link> 
                </div>                            
        </nav>    

            <Link to={'/products'}>
                <button className="prod">Tous risque <span className="auto">AUTO</span> </button>
            </Link>  

            
    </div>
  )
}
