package kr.dreamfox.japanese;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.MotionEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends Activity {
    private WebView mWebView; // 웹뷰 선언
    private WebSettings mWebSettings; //웹뷰세팅
    private ImageView mImgView; //무료버전

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_webview);

        // 웹뷰 시작
        mWebView = (WebView) findViewById(R.id.webView);
        mImgView = (ImageView) findViewById(R.id.testImg);

        mWebView.setWebViewClient(new WebViewClient()); // 클릭시 새창 안뜨게
        mWebSettings = mWebView.getSettings(); //세부 세팅 등록
        mWebSettings.setJavaScriptEnabled(true); // 웹페이지 자바스클비트 허용 여부
        mWebSettings.setSupportMultipleWindows(false); // 새창 띄우기 허용 여부
        mWebSettings.setJavaScriptCanOpenWindowsAutomatically(false); // 자바스크립트 새창 띄우기(멀티뷰) 허용 여부
        mWebSettings.setLoadWithOverviewMode(true); // 메타태그 허용 여부
        mWebSettings.setUseWideViewPort(true); // 화면 사이즈 맞추기 허용 여부
        mWebSettings.setSupportZoom(false); // 화면 줌 허용 여부
        mWebSettings.setMediaPlaybackRequiresUserGesture(false);
        mWebSettings.setBuiltInZoomControls(false); // 화면 확대 축소 허용 여부
        mWebSettings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL); // 컨텐츠 사이즈 맞추기
        mWebSettings.setCacheMode(WebSettings.LOAD_NO_CACHE); // 브라우저 캐시 허용 여부
        mWebSettings.setDomStorageEnabled(true); // 로컬저장소 허용 여부
        mWebSettings.setUseWideViewPort(true);
        mWebView.setWebContentsDebuggingEnabled(true);

        mWebView.loadUrl("file:///android_asset/www/index.html"); // 웹뷰에 표시할 웹사이트 주소, 웹뷰 시작

//        Handler mHandler = new Handler(Looper.getMainLooper());
//        mHandler.postDelayed(new Runnable(){
//            @Override
//            public void run() {
//                // Obtain MotionEvent object
//                long downTime = SystemClock.uptimeMillis()+5000;
//                long eventTime = SystemClock.uptimeMillis() + 1000;
//                float x = 1000.0f;
//                float y = 1000.0f;
//                // List of meta states found here: developer.android.com/reference/android/view/KeyEvent.html#getMetaState()
//                int metaState = 0;
//                MotionEvent motionEvent = MotionEvent.obtain( downTime, eventTime, MotionEvent.ACTION_UP, x, y, metaState );
//                // Dispatch touch event to view
//                mWebView.dispatchTouchEvent(motionEvent);
//            }
//        },4000);

    }
    @Override
    public void onPause() {
        mWebView.onPause();
        mWebView.pauseTimers();
        super.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
        mWebView.resumeTimers();
        mWebView.onResume();
    }


    @Override
    protected void onDestroy() {
        mWebView.destroy();
        mWebView = null;
        super.onDestroy();
    }
}
