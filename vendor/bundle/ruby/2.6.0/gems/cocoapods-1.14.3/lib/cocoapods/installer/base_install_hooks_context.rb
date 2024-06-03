module Pod
  class Installer
    # Context object designed to be used with the HooksManager which describes
    # the context of the installer.
    #
    class BaseInstallHooksContext
      # @return [Sandbox] The Sandbox for the project.
      #
      attr_reader :sandbox

      # @return [String] The path to the sandbox root (`Pods` directory).
      #
      attr_reader :sandbox_root

      # @return [Xcodeproj::Project] The Pods Xcode project.
      #
      attr_reader :pods_project

      # @return [Array<Pod::Project>] the subprojects nested under pods_project.
      #
      attr_reader :pod_target_subprojects

      # @return [Array<UmbrellaTargetDescription>] The list of
      #         the CocoaPods umbrella targets generated by the installer.
      #
      attr_reader :umbrella_targets

      # Initialize a new instance
      #
      # @param [Sandbox] sandbox see #sandbox
      # @param [String] sandbox_root see #sandbox_root
      # @param [Xcodeproj::Project] pods_project see #pods_project
      # @param [Array<Xcodeproj::Project>] pod_target_subprojects see #pod_target_subprojects
      # @param [Array<UmbrellaTargetDescription>] umbrella_targets see #umbrella_targets
      #
      def initialize(sandbox, sandbox_root, pods_project, pod_target_subprojects, umbrella_targets)
        @sandbox = sandbox
        @sandbox_root = sandbox_root
        @pods_project = pods_project
        @pod_target_subprojects = pod_target_subprojects
        @umbrella_targets = umbrella_targets
      end

      # @return [PostInstallHooksContext] Convenience class generator method
      #
      # @param  [Sandbox] sandbox
      #         The sandbox
      #
      # @param  [Project] pods_project
      #         The pods project.
      #
      # @param  [Project] pod_target_subprojects
      #         The subprojects nested under pods_project.
      #
      # @param  [Array<AggregateTarget>] aggregate_targets
      #         The aggregate targets, which will been presented by an adequate
      #         {UmbrellaTargetDescription} in the generated context.
      #
      # @return [HooksContext] Convenience class method to generate the
      #         static context.
      #
      def self.generate(sandbox, pods_project, pod_target_subprojects, aggregate_targets)
        umbrella_targets_descriptions = aggregate_targets.map do |umbrella|
          user_project = umbrella.user_project
          user_targets = umbrella.user_targets
          specs = umbrella.specs
          platform_name = umbrella.platform.name
          platform_deployment_target = umbrella.platform.deployment_target.to_s
          cocoapods_target_label = umbrella.label
          UmbrellaTargetDescription.new(user_project, user_targets, specs, platform_name, platform_deployment_target, cocoapods_target_label)
        end

        new(sandbox, sandbox.root.to_s, pods_project, pod_target_subprojects, umbrella_targets_descriptions)
      end

      # @return [Array<Pod::Project>] all projects generated during installation
      #
      def generated_projects
        [pods_project] + pod_target_subprojects
      end

      # Pure data class which describes an umbrella target.
      #
      class UmbrellaTargetDescription
        # @return [Xcodeproj::Project] The user project into which this target
        #         is integrated.
        #
        attr_reader :user_project

        # @return [Array<PBXNativeTarget>]
        #         The list of user targets integrated by this umbrella target.
        #
        attr_reader :user_targets

        # @return [Array<Specification>] The list of the
        #         specifications of the target.
        #
        attr_reader :specs

        # @return [Symbol] The platform (either `:ios`, `:watchos`, `:tvos`, `:visionos`, or `:osx`).
        #
        attr_reader :platform_name

        # @return [String] The deployment target.
        #
        attr_reader :platform_deployment_target

        # @return [String] The label for the target.
        #
        attr_reader :cocoapods_target_label

        # Initialize a new instance
        #
        # @param [Xcodeproj::Project] user_project see #user_project
        # @param [Array<PBXNativeTarget>] user_targets see #user_targets
        # @param [Array<Specification>] specs see #specs
        # @param [Symbol] platform_name see #platform_name
        # @param [String] platform_deployment_target see #platform_deployment_target
        # @param [String] cocoapods_target_label see #cocoapods_target_label
        #
        def initialize(user_project, user_targets, specs, platform_name, platform_deployment_target, cocoapods_target_label)
          @user_project = user_project
          @user_targets = user_targets
          @specs = specs
          @platform_name = platform_name
          @platform_deployment_target = platform_deployment_target
          @cocoapods_target_label = cocoapods_target_label
        end

        # @return [String] The path of the user project
        #         integrated by this target.
        #
        def user_project_path
          user_project.path if user_project
        end

        # @return [Array<String>] The list of the UUIDs of the
        #         user targets integrated by this umbrella
        #         target.  They can be used to find the
        #         targets opening the project They can be used
        #         to find the targets opening the project with
        #         Xcodeproj.
        #
        def user_target_uuids
          user_targets.map(&:uuid)
        end
      end
    end
  end
end