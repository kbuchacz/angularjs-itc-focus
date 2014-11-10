angular.module('itc.focus', []);

/**
 * Will make focus on form input
 * eg itc-focus="isCurrentStep('SIGNIN')"
 */
(function ()
{
    'use strict';

    function itcFocus($timeout, $parse)
    {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs)
            {
                var focusAttr = $parse(attrs.itcFocus);
                scope.$watch(focusAttr, function (newValue)
                {
                    if (true === newValue || 'true' === newValue) {
                        $timeout(function ()
                        {
                            jQuery(elem[0]).focus();
                        }, 400);
                    }
                });
            }
        };
    }

    angular.module('itc.focus').directive('itcFocus', itcFocus);
})();
