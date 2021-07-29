var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as dayjs from 'dayjs';
import { Transformer } from './Transformer';
var MaxDateTransformer = /** @class */ (function (_super) {
    __extends(MaxDateTransformer, _super);
    function MaxDateTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MaxDateTransformer, "title", {
        get: function () {
            return 'Max Date';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaxDateTransformer, "name", {
        get: function () {
            return 'maxDate';
        },
        enumerable: false,
        configurable: true
    });
    MaxDateTransformer.prototype.transform = function (value) {
        return dayjs.max(value);
    };
    return MaxDateTransformer;
}(Transformer));
export { MaxDateTransformer };
