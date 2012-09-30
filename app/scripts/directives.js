/*global define*/
(function () {
    'use strict';
    define(['app', 'AngularJS'], function (app, angular) {
        app.directive('animatedView', ['$http', '$templateCache', '$route', '$anchorScroll', '$compile', '$controller', '$timeout', function ($http, $templateCache, $route, $anchorScroll, $compile, $controller, $timeout) {
            var OUT_CLASS_NAME = "anim-out",
                IN_CLASS_NAME = "anim-in",
                ANIMATION_DURATION = 500,
                updateView, createElement, destroyPrevious,
                lastScope, lastElement;


            updateView = function (scope, parantElm, attr) {
                var locals = $route.current && $route.current.locals,
                    template = locals && locals.$template,
                    onloadExp = attr.onload || '',
                    newElement, newScope;

                if (!template) {
                    return;
                }

                newScope = $route.current.scope = scope.$new();
                newElement = createElement(locals, template, newScope, parantElm);

                parantElm.append(newElement);
                newScope.$emit('$viewContentLoaded');
                newScope.$eval(onloadExp);

                if (lastElement) {
                    lastElement.addClass(OUT_CLASS_NAME);
                }

                newElement.addClass(IN_CLASS_NAME);

                $timeout(function () {
                    destroyPrevious(newElement, newScope);
                }, ANIMATION_DURATION);
            };

            createElement = function (locals, template, newScope, parantElm) {
                var element = angular.element('<div class="wrap">' + template +
                                              '</div>'),
                    controller;

                if ($route.current.controller) {
                    locals.$scope = newScope;
                    controller = $controller($route.current.controller, locals);
                    element.contents().data('$ngControllerController', controller);
                }

                $compile(element.contents())(newScope);
                return element;
            };

            destroyPrevious = function (newElement, newScope) {
                if (lastScope) {
                    lastScope.$destroy();
                }
                if (lastElement) {
                    lastElement.remove();
                }
                lastScope = newScope;
                lastElement = newElement;
            };

            return {
                restrict: 'ECA',
                terminal: true,
                link: function (scope, parantElm, attr) {
                    scope.$on('$routeChangeSuccess', function () {
                        updateView(scope, parantElm, attr);
                    });
                    updateView(scope, parantElm, attr);
                }
            };
        }]);
    });
}());
