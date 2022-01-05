
export interface Events {
}

export interface Levels {
    TRACE: number;
    DEBUG: number;
    INFO: number;
    WARN: number;
    ERROR: number;
    SILENT: number;
}

export interface Log {
    levels: Levels;
}

export interface State {
    accounts: any[];
    isConnected: boolean;
    isUnlocked: boolean;
    initialized: boolean;
    isPermanentlyDisconnected: boolean;
}

export interface Events3 {
    notification: any[];
}

export interface Events2 {
    _events: Events3;
    _eventsCount: number;
}

export interface Buffer {
    head?: any;
    tail?: any;
    length: number;
}

export interface Buffer2 {
    head?: any;
    tail?: any;
    length: number;
}

export interface ReadableState2 {
    objectMode: boolean;
    highWaterMark: number;
    buffer: Buffer2;
    length: number;
    pipesCount: number;
    flowing: boolean;
    ended: boolean;
    endEmitted: boolean;
    reading: boolean;
    sync: boolean;
    needReadable: boolean;
    emittedReadable: boolean;
    readableListening: boolean;
    resumeScheduled: boolean;
    destroyed: boolean;
    defaultEncoding: string;
    awaitDrain: number;
    readingMore: boolean;
    decoder?: any;
    encoding?: any;
}

export interface Events4 {
    end: any[];
    close: any[];
    finish: any[];
    error: any[];
}

export interface CorkedRequestsFree {
    next?: any;
    entry?: any;
}

export interface WritableState {
    objectMode: boolean;
    highWaterMark: number;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: string;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    writecb?: any;
    writelen: number;
    bufferedRequest?: any;
    lastBufferedRequest?: any;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    bufferedRequestCount: number;
    corkedRequestsFree: CorkedRequestsFree;
}

export interface Buffer3 {
    head?: any;
    tail?: any;
    length: number;
}

export interface Buffer4 {
    head?: any;
    tail?: any;
    length: number;
}

export interface ReadableState4 {
    objectMode: boolean;
    highWaterMark: number;
    buffer: Buffer4;
    length: number;
    pipesCount: number;
    flowing: boolean;
    ended: boolean;
    endEmitted: boolean;
    reading: boolean;
    sync: boolean;
    needReadable: boolean;
    emittedReadable: boolean;
    readableListening: boolean;
    resumeScheduled: boolean;
    destroyed: boolean;
    defaultEncoding: string;
    awaitDrain: number;
    readingMore: boolean;
    decoder?: any;
    encoding?: any;
}

export interface Events5 {
    end: any[];
    close: any[];
    finish: any[];
    error: any[];
}

export interface CorkedRequestsFree2 {
    next?: any;
    entry?: any;
}

export interface WritableState2 {
    objectMode: boolean;
    highWaterMark: number;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: string;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    writecb?: any;
    writelen: number;
    bufferedRequest?: any;
    lastBufferedRequest?: any;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    bufferedRequestCount: number;
    corkedRequestsFree: CorkedRequestsFree2;
}

export interface AncestorOrigins {
}

export interface Location {
    ancestorOrigins: AncestorOrigins;
    href: string;
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
}

export interface ReactEventsDl2un8phfm7 {
}

export interface Document {
    location: Location;
    __reactEvents$dl2un8phfm7: ReactEventsDl2un8phfm7;
}

export interface CustomElements {
}

export interface History {
}

export interface Locationbar {
}

export interface Menubar {
}

export interface Personalbar {
}

export interface Scrollbars {
}

export interface Statusbar {
}

export interface Toolbar {
}

export interface Navigator {
}

export interface External {
}

export interface Screen {
}

export interface VisualViewport {
}

export interface StyleMedia {
}

export interface Timing {
    connectStart: number;
    navigationStart: number;
    loadEventEnd: number;
    domLoading: number;
    secureConnectionStart: number;
    fetchStart: number;
    domContentLoadedEventStart: number;
    responseStart: number;
    responseEnd: number;
    domInteractive: number;
    domainLookupEnd: number;
    redirectStart: number;
    requestStart: number;
    unloadEventEnd: number;
    unloadEventStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    domContentLoadedEventEnd: number;
    redirectEnd: number;
    connectEnd: number;
}

export interface Navigation {
    type: number;
    redirectCount: number;
}

export interface Performance {
    timeOrigin: number;
    timing: Timing;
    navigation: Navigation;
}

export interface Crypto {
}

export interface IndexedDB {
}

export interface WebkitStorageInfo {
}

export interface SessionStorage {
}

export interface LocalStorage {
    "loglevel:webpack-dev-server": string;
}

export interface InstallState {
    DISABLED: string;
    INSTALLED: string;
    NOT_INSTALLED: string;
}

export interface RunningState {
    CANNOT_RUN: string;
    READY_TO_RUN: string;
    RUNNING: string;
}

export interface App {
    isInstalled: boolean;
    InstallState: InstallState;
    RunningState: RunningState;
}

export interface Chrome {
    app: App;
}

export interface Caches {
}

export interface CookieStore {
}

export interface TrustedTypes {
}

export interface SpeechSynthesis {
}

export interface Scheduler {
}

export interface REACTDEVTOOLSCOMPONENTFILTER {
    type: number;
    value: number;
    isEnabled: boolean;
}

export interface TargetWindow {
    document: Document;
    name: string;
    customElements: any; // CustomElements;
    history: History;
    locationbar: any; // Locationbar;
    menubar: any; // Menubar;
    personalbar: any; // Personalbar;
    scrollbars: any; // Scrollbars;
    statusbar: any; // Statusbar;
    toolbar: any; // Toolbar;
    status: string;
    closed: boolean;
    length: number;
    opener?: any;
    frameElement?: any;
    navigator: Navigator;
    origin: string;
    external: External;
    screen: Screen;
    innerWidth: number;
    innerHeight: number;
    scrollX: number;
    pageXOffset: number;
    scrollY: number;
    pageYOffset: number;
    visualViewport: VisualViewport;
    screenX: number;
    screenY: number;
    outerWidth: number;
    outerHeight: number;
    devicePixelRatio: number;
    screenLeft: number;
    screenTop: number;
    defaultStatus: string;
    defaultstatus: string;
    styleMedia: StyleMedia;
    onsearch?: any;
    isSecureContext: boolean;
    performance: Performance;
    onappinstalled?: any;
    onbeforeinstallprompt?: any;
    crypto: Crypto;
    indexedDB: any; // IndexedDB;
    webkitStorageInfo: any; // WebkitStorageInfo;
    sessionStorage: any; // SessionStorage;
    localStorage: any; // LocalStorage;
    onbeforexrselect?: any;
    onabort?: any;
    onblur?: any;
    oncancel?: any;
    oncanplay?: any;
    oncanplaythrough?: any;
    onchange?: any;
    onclick?: any;
    onclose?: any;
    oncontextmenu?: any;
    oncuechange?: any;
    ondblclick?: any;
    ondrag?: any;
    ondragend?: any;
    ondragenter?: any;
    ondragleave?: any;
    ondragover?: any;
    ondragstart?: any;
    ondrop?: any;
    ondurationchange?: any;
    onemptied?: any;
    onended?: any;
    onerror?: any;
    onfocus?: any;
    onformdata?: any;
    oninput?: any;
    oninvalid?: any;
    onkeydown?: any;
    onkeypress?: any;
    onkeyup?: any;
    onload?: any;
    onloadeddata?: any;
    onloadedmetadata?: any;
    onloadstart?: any;
    onmousedown?: any;
    onmouseenter?: any;
    onmouseleave?: any;
    onmousemove?: any;
    onmouseout?: any;
    onmouseover?: any;
    onmouseup?: any;
    onmousewheel?: any;
    onpause?: any;
    onplay?: any;
    onplaying?: any;
    onprogress?: any;
    onratechange?: any;
    onreset?: any;
    onresize?: any;
    onscroll?: any;
    onseeked?: any;
    onseeking?: any;
    onselect?: any;
    onstalled?: any;
    onsubmit?: any;
    onsuspend?: any;
    ontimeupdate?: any;
    ontoggle?: any;
    onvolumechange?: any;
    onwaiting?: any;
    onwebkitanimationend?: any;
    onwebkitanimationiteration?: any;
    onwebkitanimationstart?: any;
    onwebkittransitionend?: any;
    onwheel?: any;
    onauxclick?: any;
    ongotpointercapture?: any;
    onlostpointercapture?: any;
    onpointerdown?: any;
    onpointermove?: any;
    onpointerup?: any;
    onpointercancel?: any;
    onpointerover?: any;
    onpointerout?: any;
    onpointerenter?: any;
    onpointerleave?: any;
    onselectstart?: any;
    onselectionchange?: any;
    onanimationend?: any;
    onanimationiteration?: any;
    onanimationstart?: any;
    ontransitionrun?: any;
    ontransitionstart?: any;
    ontransitionend?: any;
    ontransitioncancel?: any;
    onafterprint?: any;
    onbeforeprint?: any;
    onbeforeunload?: any;
    onhashchange?: any;
    onlanguagechange?: any;
    onmessage?: any;
    onmessageerror?: any;
    onoffline?: any;
    ononline?: any;
    onpagehide?: any;
    onpageshow?: any;
    onpopstate?: any;
    onrejectionhandled?: any;
    onstorage?: any;
    onunhandledrejection?: any;
    onunload?: any;
    chrome: Chrome;
    caches: Caches;
    cookieStore: CookieStore;
    ondevicemotion?: any;
    ondeviceorientation?: any;
    ondeviceorientationabsolute?: any;
    originAgentCluster: boolean;
    trustedTypes: TrustedTypes;
    speechSynthesis: SpeechSynthesis;
    onpointerrawupdate?: any;
    crossOriginIsolated: boolean;
    scheduler: Scheduler;
    webpackChunkui: any[];
    __reactRefreshInjected: boolean;
    __EMOTION_REACT_11__: boolean;
    __REACT_DEVTOOLS_APPEND_COMPONENT_STACK__: boolean;
    __REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__: boolean;
    __REACT_DEVTOOLS_COMPONENT_FILTERS__: REACTDEVTOOLSCOMPONENTFILTER[];
    __REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__: boolean;
    __REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__: boolean;
    __REACT_DEVTOOLS_BROWSER_THEME__: string;
}

export interface Pipes2 {
    _readableState: ReadableState4;
    readable: boolean;
    _events: Events5;
    _eventsCount: number;
    _writableState: WritableState2;
    writable: boolean;
    allowHalfOpen: boolean;
    _init: boolean;
    _haveSyn: boolean;
    _name: string;
    _target: string;
    _targetOrigin: string;
    _targetWindow: TargetWindow;
}

export interface ReadableState3 {
    objectMode: boolean;
    highWaterMark: number;
    buffer: Buffer3;
    length: number;
    pipes: Pipes2;
    pipesCount: number;
    flowing: boolean;
    ended: boolean;
    endEmitted: boolean;
    reading: boolean;
    sync: boolean;
    needReadable: boolean;
    emittedReadable: boolean;
    readableListening: boolean;
    resumeScheduled: boolean;
    destroyed: boolean;
    defaultEncoding: string;
    awaitDrain: number;
    readingMore: boolean;
    decoder?: any;
    encoding?: any;
}

export interface Events6 {
    end: any[];
    close: any[];
    finish: any[];
    error: any[];
}

export interface CorkedRequestsFree3 {
    next?: any;
    entry?: any;
}

export interface WritableState3 {
    objectMode: boolean;
    highWaterMark: number;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: string;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    writecb?: any;
    writelen: number;
    bufferedRequest?: any;
    lastBufferedRequest?: any;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    bufferedRequestCount: number;
    corkedRequestsFree: CorkedRequestsFree3;
}

export interface Substreams {
}

export interface Parent {
    _readableState: ReadableState3;
    readable: boolean;
    _events: Events6;
    _eventsCount: number;
    _writableState: WritableState3;
    writable: boolean;
    allowHalfOpen: boolean;
    _substreams: Substreams;
}

export interface Pipes {
    _readableState: ReadableState2;
    readable: boolean;
    _events: Events4;
    _eventsCount: number;
    _writableState: WritableState;
    writable: boolean;
    allowHalfOpen: boolean;
    _parent: Parent;
    _name: string;
}

export interface ReadableState {
    objectMode: boolean;
    highWaterMark: number;
    buffer: Buffer;
    length: number;
    pipes: Pipes;
    pipesCount: number;
    flowing: boolean;
    ended: boolean;
    endEmitted: boolean;
    reading: boolean;
    sync: boolean;
    needReadable: boolean;
    emittedReadable: boolean;
    readableListening: boolean;
    resumeScheduled: boolean;
    destroyed: boolean;
    defaultEncoding: string;
    awaitDrain: number;
    readingMore: boolean;
    decoder?: any;
    encoding?: any;
}

export interface Events7 {
    end: any[];
    close: any[];
    finish: any[];
    error: any[];
}

export interface CorkedRequestsFree4 {
    next?: any;
    entry?: any;
}

export interface WritableState4 {
    objectMode: boolean;
    highWaterMark: number;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: string;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    writecb?: any;
    writelen: number;
    bufferedRequest?: any;
    lastBufferedRequest?: any;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    bufferedRequestCount: number;
    corkedRequestsFree: CorkedRequestsFree4;
}

export interface Stream {
    _readableState: ReadableState;
    readable: boolean;
    _events: Events7;
    _eventsCount: number;
    _writableState: WritableState4;
    writable: boolean;
    allowHalfOpen: boolean;
}

export interface JsonRpcConnection {
    events: Events2;
    stream: Stream;
}

export interface Events8 {
}

export interface RpcEngine {
    _events: Events8;
    _eventsCount: number;
    _middleware: any[];
}

export interface Events9 {
    close: boolean;
    data: boolean;
    networkChanged: boolean;
    notification: boolean;
}

export interface SentWarnings {
    enable: boolean;
    experimentalMethods: boolean;
    send: boolean;
    events: Events9;
}

export interface Metamask {
}

export interface Ethereum {
    enable(): [any] | PromiseLike<[any]>;
    _events: Events;
    _eventsCount: number;
    _maxListeners: number;
    _log: Log;
    _state: State;
    selectedAddress?: any;
    chainId: string;
    _jsonRpcConnection: JsonRpcConnection;
    _rpcEngine: RpcEngine;
    _sentWarnings: SentWarnings;
    networkVersion: string;
    isMetaMask: boolean;
    _metamask: Metamask;
}

