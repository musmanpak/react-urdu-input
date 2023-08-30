import React, { useRef, useEffect } from 'react';


const ALLAH = 0xFDF2;
const ALIF = 0x0627;
const ALMAD = 0x0622;
const BAY = 0x0628;
const PAY = 0x067E;
const TAY = 0x062A;
const TTAY = 0x0679;
const SAY = 0x062B;
const JEEM = 0x062C;
const CHAY = 0x0686;
const HAY = 0x062D;
const KHAY = 0x062E;
const DAL = 0x062F;
const DDAL = 0x0688;
const ZAL = 0x0630;
const RAY = 0x0631;
const RRAY = 0x0691;
const ZAY = 0x0632;
const XAY = 0x0698;
const SEEN = 0x0633;
const SHEEN = 0x0634;
const SAAD = 0x0635;
const ZAAD = 0x0636;
const TOAY = 0x0637;
const ZOAY = 0x0638;
const AIN = 0x0639;
const GHAIN = 0x063A;
const FAY = 0x0641;
const QAAF = 0x0642;
const KAAF = 0x06A9;
const GAAF = 0x06AF;
const LAAM = 0x0644;
const MEEM = 0x0645;
const NOON = 0x0646;
const NOONG = 0x06BA;
const WAO = 0x0648;
const WAOHAMZ = 0x0624;
const HAA = 0x06C1;
const HAMZA = 0x0621;
const HAMCY = 0x0626;
const CHOTIYA = 0x06CC;
const BARRIYA = 0x06D2;
const DCHASHMI = 0x06BE;
const ZERO = 0x6F0;
const ONE = 0x6F1;
const TWO = 0x6F2;
const THREE = 0x6F3;
const FOUR = 0x6F4;
const FIVE = 0x6F5;
const SIX = 0x6F6;
const SEVEN = 0x6F7;
const EIGHT = 0x6F8;
const NINE = 0x6F9;
const PLUS = 0x002B;
const MINUS = 0x002D;
const MUL = 0x00D7;
const DIV = 0x00F7;
const PERC = 0x066A;
const LPREN = 0x0028;
const RPREN = 0x0029;
const PAISH = 0x064F;
const ZAIR = 0x0650;
const ZABAR = 0x064E;
const DOPAISH = 0x064C;
const DOZAIR = 0x064D;
const DOZABAR = 0x064B;
const GAZM = 0x0652;
const MAD = 0x06E4;
const SHAD = 0x0651;
const SHADZAIR = 0xFC62;
const SHADPAISH = 0xFC61;
const HIHAMZA = 0x0674;
const KHARIZAB = 0x0670;
const RSQOTMRK = 0x2019;
const LSQOTMRK = 0x2018;
const RDQOTMRK = 0x201D;
const LDQOTMRK = 0x201C;
const DECSEP = 0x0201A;
const FULSTOP = 0x06D4;
const AQMARK = 0x061F;
const ASEMICOL = 0x061B;
const ACOMA = 0x060C;
const NOT = 0x0021;
const QUOT = 0x0022;
const COLON = 0x003A;
const SEMICOL = 0x003B;
const K_ALIF = 97;
const K_ALMAD = 65;
const K_BAY = 98;
const K_PAY = 112;
const K_TAY = 116;
const K_TTAY = 84;
const K_SAY = 67;
const K_JEEM = 106;
const K_CHAY = 99;
const K_HAY = 72;
const K_KHAY = 75;
const K_DAL = 100;
const K_DDAL = 68;
const K_ZAL = 90;
const K_RAY = 114;
const K_RRAY = 82;
const K_ZAY = 122;
const K_XAY = 88;
const K_SEEN = 115;
const K_SHEEN = 120;
const K_SAAD = 83;
const K_ZAAD = 74;
const K_TOAY = 118;
const K_ZOAY = 86;
const K_AIN = 101;
const K_GHAIN = 71;
const K_FAY = 102;
const K_QAAF = 113;
const K_KAAF = 107;
const K_GAAF = 103;
const K_LAAM = 108;
const K_MEEM = 109;
const K_NOON = 110;
const K_NOONG = 78;
const K_WAO = 119;
const K_HAA = 111;
const K_DCHASHMI = 104;
const K_HAMZA = 117;
const K_CHOTIYA = 105;
const K_BARRIYA = 121;
const K_HAMZAYA = 85;
const K_ZERO = 48;
const K_ONE = 49;
const K_TWO = 50;
const K_THREE = 51;
const K_FOUR = 52;
const K_FIVE = 53;
const K_SIX = 54;
const K_SEVEN = 55;
const K_EIGHT = 56;
const K_NINE = 57;
const K_PLUS = 43;
const K_MINUS = 45;
const K_MUL = 42;
const K_DIV = 47;
const K_PERC = 37;
const K_LPREN = 41;
const K_RPREN = 40;
const K_EQ = 61;
const K_SQOTMRK = 44;
const K_DQOTMRK = 34;
const K_FULSTOP = 46;
const K_QMARK = 63;
const K_SEMICOL = 59;
const K_COMA = 44;
const K_NOT = 33;
const K_COLON = 58;
const SPACE = 32;
const ENTER = 13;
const NLINE = '\n';
const TAB = 9;
const aK_ALIF = 'a';
const aK_ALMAD = 'A';
const aK_BAY = 'b';
const aK_PAY = 'p';
const aK_TAY = 't';
const aK_TTAY = 'T';
const aK_SAY = 'C';
const aK_JEEM = 'j';
const aK_CHAY = 'c';
const aK_HAY = 'H';
const aK_KHAY = 'K';
const aK_DAL = 'd';
const aK_DDAL = 'D';
const aK_ZAL = 'Z';
const aK_RAY = 'r';
const aK_RRAY = 'R';
const aK_ZAY = 'z';
const aK_XAY = 'X';
const aK_SEEN = 's';
const aK_SHEEN = 'x';
const aK_SAAD = 'S';
const aK_ZAAD = 'J';
const aK_TOAY = 'v';
const aK_ZOAY = 'V';
const aK_AIN = 'e';
const aK_GHAIN = 'G';
const aK_FAY = 'f';
const aK_QAAF = 'q';
const aK_KAAF = 'k';
const aK_GAAF = 'g';
const aK_LAAM = 'l';
const aK_MEEM = 'm';
const aK_NOON = 'n';
const aK_NOONG = 'N';
const aK_WAO = 'w';
const aK_HAA = 'o';
const aK_DCHASHMI = 'h';
const aK_HAMZA = 'u';
const aK_CHOTIYA = 'i';
const aK_BARRIYA = 'y';
const aK_HAMZAYA = 'U';
const aK_ZERO = '0';
const aK_ONE = '1';
const aK_TWO = '2';
const aK_THREE = '3';
const aK_FOUR = '4';
const aK_FIVE = '5';
const aK_SIX = '6';
const aK_SEVEN = '7';
const aK_EIGHT = '8';
const aK_NINE = '9';
const aK_PLUS = '+';
const aK_MINUS = '-';
const aK_MUL = '*';
const aK_DIV = '/';
const aK_PERC = '%';
const aK_LPREN = ')';
const aK_RPREN = '(';
const aK_EQ = '=';
const aK_SQOTMRK = '\'';
const aK_DQOTMRK = '"';
const aK_FULSTOP = '.';
const aK_QMARK = '?';
const aK_SEMICOL = ';';
const aK_COMA = ',';
const aK_NOT = '!';
const aK_COLON = ':';
const aSPACE = ' ';
const aENTER = '\r';
const aNLINE = '\n';
const aTAB = '\t';

function ReactUrduInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    const txtObj: any = inputRef.current;

    function MakeTextBoxUrduEnabled(txtObj: HTMLInputElement) {
      txtObj.addEventListener('keypress', urdubar_eventCaptured, false);
    }

    function urdubar_eventCaptured(evt: { target: any; srcElement: any; }) {
      let target;
      if (evt.target) target = evt.target;
      else target = evt.srcElement;
      KeyPress(target, evt);
    }

    function KeyPress(textbox: HTMLInputElement, evt: any) {
      let keyCode;
      let keyChar;
      if (evt) {
        if (window.event) {
          keyCode = evt.keyCode;
        } else {
          keyCode = evt.charCode;
        }
        if (evt.ctrlKey === true) {
          return true;
        }
        if (evt.altKey === true) {
          return true;
        }
        if (keyCode === 0) {
          return true;
        }
      } else {
        alert("Wrong version");
        return true;
      }
      evt.returnValue = false;
      keyChar = String.fromCharCode(keyCode);
      if (isValidAlphabet(keyChar)) {
        const apnaChar = getNextStateUrduPhoneticLayout(findLastChar(textbox), keyChar);
        if (apnaChar === keyChar) {
          replaceEndOfWord(textbox, findLastChar(textbox));
        }
        insertAtCaret(textbox, apnaChar);
        if (evt.preventDefault) {
          evt.preventDefault();
          evt.cancelBubble = true;
        }
      }
    }

    function replaceEndOfWord(textbox: HTMLInputElement, character: string) {
      let nayaChar;
      nayaChar = String.fromCharCode(character.charCodeAt(0));
      if (nayaChar !== character) {
        eraseLastChar(textbox);
        insertAtCaret(textbox, nayaChar);
      }
    }

    function findLastChar(textbox: HTMLInputElement) {
      let startPos = textbox.selectionStart || 0;
      let endPos = textbox.selectionEnd || 0;
      startPos = startPos - 1;
      endPos = startPos + 1;
      return (textbox.value).substring(startPos, endPos);
    }

    function eraseLastChar(textbox: HTMLInputElement) {
      const txtarea = textbox;
      const startPos = (txtarea.selectionStart || 1) - 1;
      const endPos = txtarea.selectionEnd;
      const scrollTop = txtarea.scrollTop;
      txtarea.value = txtarea.value.substring(0, startPos) + txtarea.value.substring(endPos as number, txtarea.value.length);
      const cPos = startPos;
      txtarea.selectionStart = cPos;
      txtarea.selectionEnd = cPos;
      txtarea.scrollTop = scrollTop;
    }

    function insertAtCaret(textbox: HTMLInputElement, text: string) {
      const txtarea = textbox;
      const startPos = txtarea.selectionStart || 0;
      const endPos = txtarea.selectionEnd || 0;
      const scrollTop = txtarea.scrollTop;
      let myText = (txtarea.value).substring(startPos, endPos);
      if (!myText) {
        myText = text;
      }
      txtarea.value = txtarea.value.substring(0, startPos) + text + txtarea.value.substring(endPos, txtarea.value.length);
      txtarea.focus();
      const cPos = startPos + text.length;
      txtarea.selectionStart = cPos;
      txtarea.selectionEnd = cPos;
      txtarea.scrollTop = scrollTop;
    }


    function isValidAlphabet(character: string) {
      if (getNextStateUrduPhoneticLayout("", character) === "") return false;
      return true;
    }

    function getNextStateUrduPhoneticLayout(lastInput: string, currentInput: string) {
      return String.fromCharCode(setUrduPhoneticUnicodes(currentInput) as number);
    }

    function setUrduPhoneticUnicodes(temp: string) {
      let var_char: number = -1;
      switch (temp) {
        case aK_ALIF:
          var_char = ALIF;
          break;
        case aK_ALMAD:
          var_char = ALMAD;
          break;
        case aK_BAY:
          var_char = BAY;
          break;
        case aK_PAY:
          var_char = PAY;
          break;
        case aK_TAY:
          var_char = TAY;
          break;
        case aK_TTAY:
          var_char = TTAY;
          break;
        case aK_SAY:
          var_char = SAY;
          break;
        case aK_JEEM:
          var_char = JEEM;
          break;
        case aK_CHAY:
          var_char = CHAY;
          break;
        case aK_HAY:
          var_char = HAY;
          break;
        case aK_KHAY:
          var_char = KHAY;
          break;
        case aK_DAL:
          var_char = DAL;
          break;
        case aK_DDAL:
          var_char = DDAL;
          break;
        case aK_ZAL:
          var_char = ZAL;
          break;
        case aK_RAY:
          var_char = RAY;
          break;
        case aK_RRAY:
          var_char = RRAY;
          break;
        case aK_ZAY:
          var_char = ZAY;
          break;
        case aK_XAY:
          var_char = XAY;
          break;
        case aK_SEEN:
          var_char = SEEN;
          break;
        case aK_SHEEN:
          var_char = SHEEN;
          break;
        case aK_SAAD:
          var_char = SAAD;
          break;
        case aK_ZAAD:
          var_char = ZAAD;
          break;
        case aK_TOAY:
          var_char = TOAY;
          break;
        case aK_ZOAY:
          var_char = ZOAY;
          break;
        case aK_AIN:
          var_char = AIN;
          break;
        case aK_GHAIN:
          var_char = GHAIN;
          break;
        case aK_FAY:
          var_char = FAY;
          break;
        case aK_QAAF:
          var_char = QAAF;
          break;
        case aK_KAAF:
          var_char = KAAF;
          break;
        case aK_GAAF:
          var_char = GAAF;
          break;
        case aK_LAAM:
          var_char = LAAM;
          break;
        case aK_MEEM:
          var_char = MEEM;
          break;
        case aK_NOON:
          var_char = NOON;
          break;
        case aK_NOONG:
          var_char = NOONG;
          break;
        case aK_WAO:
          var_char = WAO;
          break;
        case aK_HAA:
          var_char = HAA;
          break;
        case aK_DCHASHMI:
          var_char = DCHASHMI;
          break;
        case aK_HAMZAYA:
          var_char = HAMCY;
          break;
        case aK_CHOTIYA:
          var_char = CHOTIYA;
          break;
        case aK_BARRIYA:
          var_char = BARRIYA;
          break;
        case aK_HAMZA:
          var_char = HAMZA;
          break;
        case aK_LPREN:
          var_char = LPREN;
          break;
        case aK_RPREN:
          var_char = RPREN;
          break;
        case aK_SQOTMRK:
          var_char = RSQOTMRK;
          break;
        case aK_DQOTMRK:
          var_char = RDQOTMRK;
          break;
        case aK_FULSTOP:
          var_char = FULSTOP;
          break;
        case aK_QMARK:
          var_char = AQMARK;
          break;
        case aK_SEMICOL:
          var_char = ASEMICOL;
          break;
        case aK_COMA:
          var_char = ACOMA;
          break;
        case aK_NOT:
          var_char = NOT;
          break;
        case aK_COLON:
          var_char = COLON;
          break;
        case aSPACE:
          var_char = 32;
          break;
        case aENTER:
          var_char = 13;
          break;
        case aK_ZERO:
          var_char = ZERO;
          break;
        case aK_ONE:
          var_char = ONE;
          break;
        case aK_TWO:
          var_char = TWO;
          break;
        case aK_THREE:
          var_char = THREE;
          break;
        case aK_FOUR:
          var_char = FOUR;
          break;
        case aK_FIVE:
          var_char = FIVE;
          break;
        case aK_SIX:
          var_char = SIX;
          break;
        case aK_SEVEN:
          var_char = SEVEN;
          break;
        case aK_EIGHT:
          var_char = EIGHT;
          break;
        case aK_NINE:
          var_char = NINE;
          break;
        default:
          return false;
      }
      return var_char;
    }

    MakeTextBoxUrduEnabled(txtObj);

    return () => {
      if (txtObj.removeEventListener) {
        txtObj.removeEventListener('keypress', urdubar_eventCaptured, false);
      }
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder=""
      style={{ direction: 'rtl', textAlign: 'right' }}
    />
  );
}

export default ReactUrduInput;
