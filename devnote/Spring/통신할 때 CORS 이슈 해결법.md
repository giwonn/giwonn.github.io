# 통신 시에 CORS 이슈 해결법

보통 백단과 프론트단 분리하여 실행시키면 CORS 이슈를 많이 보게 된다.

CORS(크로스 도메인 이슈)를 해결하는 방법은 몇 가지가 있다.

CORS 이슈는 보통 서버측에서 해결하는 것이 보편적인 방법이다.

## @CrossOrigin(origins = "\*")

:::tip 작성방법
@CrossOrigin(origins = "**허용주소:포트**")
:::

해당 어노테이션을 통신하는 컨트롤러에 붙여주면 간단히 해결된다.

별표 대신 주소를 넣어도 된다.

<br>

## resp.setHeader()

:::tip 작성방법
resp.setHeader("Access-Control-Allow-Origin", req.getHeader("**허용주소:포트**"));
:::

요청이 들어오면 response로 헤더를 직접 허용해준다.
요청 방식(GET, POST)에 따라서 허용해줄 수도 있고, 그 외에 옵션도 다양하다.

```java{15}
public class LogFilter implements Filter {

	// ...

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
                // ...

                HttpServletResponse resp = (HttpServletResponse) response;
                // req.getHeader("Origin") -> http://localhost:3000

                // Origin 대신 "주소:포트번호" 형식으로 넣어도 된다.
                // 이전 방법인 어노테이션과 똑같이 동작한다.
                resp.setHeader("Access-Control-Allow-Origin", req.getHeader("Origin"));
                resp.setHeader("Access-Control-Allow-Credentials", "true");
                resp.setHeader("Access-Control-Allow-Methods", "GET, POST");
                resp.setHeader("Access-Control-Max-Age", "10");
                resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

                // ...

	}

    // ...

}
```
