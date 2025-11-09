export class QParamService {

    static getDocumentLocationParam(paramName) {
        let params = new URLSearchParams(document.location.search);

        return params.get(paramName);
    }

}
