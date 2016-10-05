// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkID=397704
// ページ上のコードをデバッグするには、Ripple で読み込むか、Android デバイス/エミュレーターで読み込みます。アプリを起動し、ブレークポイントを設定します。
// 次に、JavaScript コンソールで "window.location.reload()" を実行します。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Cordova の一時停止を処理し、イベントを再開します
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // ここから追記

        // 1秒ごとにshowNowTime関数を呼び出すタイマーをセット
        window.setInterval(showNowTime, 1000);

        function showNowTime() {

            // 現在時刻
            var now = new Date();

            // 時分秒に分割し、それぞれ2桁の文字列（先頭ゼロ埋め）にする
            var hh = ('0' + now.getHours()).toString().slice(-2);
            var mm = ('0' + now.getMinutes()).toString().slice(-2);
            var ss = ('0' + now.getSeconds()).toString().slice(-2);

            // HH:mm:ssという書式で現在時刻を表示する
            parentElement.innerHTML = hh + ":" + mm + ":" + ss;
        }
    };

    function onPause() {
        // TODO: このアプリケーションは中断されました。ここで、アプリケーションの状態を保存します。
    };

    function onResume() {
        // TODO: このアプリケーションが再アクティブ化されました。ここで、アプリケーションの状態を復元します。
    };
} )();